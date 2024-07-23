import { useState } from "react";
import Tab from "../../component/Tab";
import CustomersReport from "./CustomersReport";
import ProductReport from "./ProductReport";
import SalesReport from "./SalesReport";

const Report = () => {
  return (
    <section className="w-full h-full">
      <Tab
        title1={"customers"}
        title2={"products"}
        title3={"sales"}
        content1={<CustomersReport/>}
        content3={<SalesReport/>}
        content2={<ProductReport/>}
      />
    </section>
  )
}

export default Report
