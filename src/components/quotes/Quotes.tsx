import React, { useEffect, useState } from "react";
import styles from "./Quotes.module.css"
import axios from "axios"
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { Carousel as AntCarousel, Spin, Space, Typography} from "antd";

export const Quotes: React.FC = () => {
  let navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(true);
  const [quoteList, setQuoteList] = useState<any>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const { data } = await axios.get(`/api1/quote/list/`);
        console.log("related", data.data, typeof(data.data))
        setQuoteList(data.data)
        setLoading(false)
      } catch (error) {
        setError(error instanceof Error ? error.message : "error")
        setLoading(false)
      }
    }
    fetchData();
  }, []);
  if (loading) {
    return <Spin
      size="large"
      style={{
        marginTop: 200,
        marginBottom: 200,
        marginLeft: "auto",
        marginRight: "auto",
        width: "100%",
      }}
    />
  }
  if (error) {
    return <div>error: {error}</div>;
  }

  return (
    <AntCarousel autoplay autoplaySpeed={6000} effect="fade" className={styles.Slider}>
      {quoteList.map(p => (
       <Space> 
          <Typography.Text onClick={() => navigate(`/book/:${p.book_id}`)}>
            {p.text}
          </Typography.Text>
      </Space>
      ))}
    </AntCarousel>
  );
}