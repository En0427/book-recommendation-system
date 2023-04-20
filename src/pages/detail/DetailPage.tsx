import React, { useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

type MatchParams = {
    touristRouteId: string;
  };

export const DetailPage: React.FC = (): JSX.Element => {
    const params = useParams();
    return <h1>书本详情页面,book_ID: {params.id}</h1>
}