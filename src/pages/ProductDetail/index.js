import Layout from "../../components/moleculs/layout";
import { motion } from "framer-motion";
import ProductDetailComponent from "../../components/moleculs/productComponent/ProductDetailComponent";

export default function ProductDetail() {
  return (
    <Layout footer="productDetail">
      <div id="product-detail-page">
        <motion.div
          initial={{ marginLeft: "100%" }}
          animate={{ marginLeft: "0%" }}
          transition={{ duration: 0.2, ease: "easeInOut" }}
          exit={{ marginLeft: "100%" }}
          className="w-full bg-white h-screen overflow-y-scroll scrollbar-hide pt-[22px] pb-32"
        >
          <ProductDetailComponent />
        </motion.div>
      </div>
    </Layout>
  );
}
