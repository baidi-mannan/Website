import React, { useEffect, useState } from "react";
import { Grid, Typography, ButtonGroup, Button, makeStyles } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import productData from "../../../ProductType";
import ProductHorizontal from "../ProductHorizontal";
import ProductTab from "../ProductTab";

const useStyles = makeStyles(() => ({
  buttongroup: {
    "& .MuiButtonGroup-groupedContainedPrimary:not(:last-child)": {
      borderColor: "#3f3f3f",
    },
  },
  pageNumberBox: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    fontWeight: "700",
  },
}));

const ProductType = ({ category, brands, view, sortBy, priceRange }) => {
  let typeProductState = productData["ALLPRODUCTS"].state;
  let typeProductAction = productData["ALLPRODUCTS"].action;
  let typeProductLoading = productData["ALLPRODUCTS"].loading;
  let typeProductError = productData["ALLPRODUCTS"].error;

  const dispatch = useDispatch();
  const classes = useStyles();

  const allProducts = useSelector((state) => state.Product[typeProductState]);
  const allProductsLoading = useSelector((state) => state.Product[typeProductLoading]);
  const allProductsError = useSelector((state) => state.Product[typeProductError]);

  // ----------Filtering-------------
  let filteredProducts = [...allProducts];
  let categoriesToFilter = [];
  let brandsToFilter = [];

  // REmove spaces and convert to uppercase for making comparison
  categoriesToFilter = category.map((str) => str.replace(/\s/g, "").toUpperCase());
  brandsToFilter = brands.map((str) => str.replace(/\s/g, "").toUpperCase());

  // filter according to Price Range
  filteredProducts = filteredProducts.filter((product) => product.discountedPrice >= priceRange[0] && product.discountedPrice <= priceRange[1]);

  // filter according to brand
  if (brandsToFilter.length !== 0) {
    filteredProducts = filteredProducts.filter((product) =>
      brandsToFilter.includes(product.brand.replace(/\s/g, "").toUpperCase())
    );
  }

  //filter accoding to category type
  if (categoriesToFilter.length !== 0) {
    filteredProducts = filteredProducts.filter((product) =>
      categoriesToFilter.includes(product.type.replace(/\s/g, "").toUpperCase())
    );
  }

  if (sortBy === "priceHTL") {
    //Sort Item in Price From High To low
    filteredProducts.sort((productA, productB) => {
      return productB.discountedPrice - productA.discountedPrice;
    });
  } else if (sortBy === "priceLTH") {
    // sort item in Price From low to high
    filteredProducts.sort((productA, productB) => {
      return productA.discountedPrice - productB.discountedPrice;
    });
  }

  useEffect(() => {
    if (!allProducts.length) {
      dispatch(typeProductAction());
    }
  }, [dispatch, typeProductAction, allProducts]);

  //--------------Pagination--------------
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(12);
  const [pageNumberLimit] = useState(5);
  const [maxPageNumberLimit, setMaxPageNumberLimit] = useState(5);
  const [minPageNumberLimit, setMinPageNumberLimit] = useState(0);

  const handleClick = (event) => {
    setCurrentPage(Number(event.target.id));
  };

  const pages = [];
  for (let i = 1; i <= Math.ceil(filteredProducts.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const renderPageNumbers = pages.map((number) => {
    if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
      return (
        <div
          key={number}
          id={number}
          onClick={handleClick}
          className={classes.pageNumberBox}
          style={{
            backgroundColor: currentPage === number ? "#3f3f3f" : "#f2f2f2",
            color: currentPage === number ? "#ffd05b" : "#3f3f3f",
          }}
        >
          {number}
        </div>
      );
    } else {
      return null;
    }
  });

  const handleNextbtn = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  const handlePrevbtn = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  let pageIncrementBtn = null;
  if (pages.length > maxPageNumberLimit) {
    pageIncrementBtn = (
      <div className={classes.pageNumberBox} onClick={handleNextbtn}>
        &hellip;
      </div>
    );
  }

  let pageDecrementBtn = null;
  if (minPageNumberLimit >= 1) {
    pageDecrementBtn = (
      <div className={classes.pageNumberBox} onClick={handlePrevbtn}>
        &hellip;
      </div>
    );
  }

  // Reset to Page number 1 if any of the filters gets changes..
  useEffect(() => {
    setCurrentPage(1);
  }, [category, brands, sortBy, priceRange]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);


  return (
    <Grid container justify="center" alignItems="center">
      {allProductsLoading ? (
        <Typography variant="h5" color="secondary" style={{ textAlign: "center" }}>
          Loading...
        </Typography>
      ) : allProductsError ? (
        <Typography variant="h5" color="secondary" style={{ textAlign: "center" }}>
          No products available currently !!!!
        </Typography>
      ) : currentItems.length ? ( //filteredProducts.length ? (
        <>
          {currentItems.map((product) => {
            //{filteredProducts.map((product) => {
            if (view === "multiple") {
              return <ProductTab product={product} key={product.id} />;
            } else {
              return <ProductHorizontal product={product} key={product.id} />;
            }
          })}

          <Grid container style={{ margin: "2rem 0" }} justify="center">
            <ButtonGroup
              className={classes.buttongroup}
              variant="contained"
              color="primary"
              aria-label="contained primary button group"
            >
              <Button
                style={{ color: "#3f3f3f" }}
                onClick={handlePrevbtn}
                disabled={currentPage === pages[0] ? true : false}
              >
                <strong>Prev</strong>
              </Button>
              {pageDecrementBtn}
              {renderPageNumbers}
              {pageIncrementBtn}
              <Button
                style={{ color: "#3f3f3f" }}
                onClick={handleNextbtn}
                disabled={currentPage === pages[pages.length - 1] ? true : false}
              >
                <strong>Next</strong>
              </Button>
            </ButtonGroup>
          </Grid>
        </>
      ) : (
        <Typography variant="h5" color="secondary" style={{ textAlign: "center" }}>
          No products available currently !!!!
        </Typography>
      )}
    </Grid>
  );
};

export default ProductType;
