import React from "react";
import styles from "./SearchPage.module.css";
import { Header, Footer, FilterArea } from "../../components";
import { useParams } from "react-router-dom";
import { Pagination, Spin } from "antd";
import { productList1 } from "../home/mockups";

type MatchParams = {
   keywords: string;
}

export const SearchPage: React.FC = () => {
   const { keywords } = useParams<MatchParams>();
   //const params = useParams();
   return (
      <>
         <Header />
         <div className={styles["page-content"]}>
            {/* 分类过滤器 */}
            <div className={styles["product-list-container"]}>
               <FilterArea />
            </div>
            {/* 产品列表 */}
            <div className={styles["product-list-container"]}>
               {/* <ProductList 
                  data={productList}
                  paging={Pagination}
               /> */}
               <h1>搜索页面: {keywords}</h1>
            </div>
         </div>
         <Footer />
      </>
   )
}