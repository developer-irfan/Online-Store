import React from "react";
//import skeleton loader from loading-skeleton package
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function ProductLoader() {
  return (
    <div className="col-lg-4 col-md-6 mb-4 py-4">
      <Skeleton width={340} height={160} borderRadius="2%" />

      <p className="mb-1 font-weight-bold black-text">
        <Skeleton width={160} height={40} borderRadius="2%" />
      </p>

      <p className="mb-1">
        <small className="mr-1 mt-2">
          <Skeleton width={120} height={40} borderRadius="2%" />
        </small>
        <Skeleton width={100} height={40} borderRadius="2%" />
        <strong></strong>
      </p>
    </div>
  );
}

export default ProductLoader;
