// import Head from "next/head";
import * as S from "./payment.styles";
import type {
  IMutation,
  IMutationCreatePointTransactionOfLoadingArgs,
} from "../../../commons/types/generated/types";
import { gql, useApolloClient } from "@apollo/client";
import { Modal } from "antd";
import { useEffect } from "react";

declare const window: typeof globalThis & {
  IMP: any;
};

const CREATE_POINT_TRANSACTION_OF_LOADING = gql`
  mutation createPointTransactionOfLoading($impUid: ID!) {
    createPointTransactionOfLoading(impUid: $impUid) {
      amount
    }
  }
`;

export default function PaymentButton(): JSX.Element {
  const client = useApolloClient();
  useEffect(() => {
    const script = document.createElement("script");

    script.src = "https://cdn.iamport.kr/v1/iamport.js";
    script.async = true;

    document.body.appendChild(script);

    return () => {
      // Clean up by removing the script when the component unmounts
      document.body.removeChild(script);
    };
  }, []);

  const onClickPayment = () => {
    const IMP = window.IMP;

    IMP.init("imp49910675");

    IMP.request_pay(
      {
        // param
        pg: "kakaopay",
        pay_method: "card",
        // merchant_uid: "ORD20180131-0000011",
        name: "50000 포인트",
        amount: 50000,
        buyer_email: "c@c.com",
        buyer_name: "gusals",
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "http://localhost:3000/shop",
        // 모바일에서는 결제시 페이지 주소가 바뀌기 때문에 redirection할 주소를 입력해주는 옵션
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공 시 로직,
          // 백엔드에 결제관련 데이터 날려주기 (mutation) ( graph ql )
          // 백엔드에 결제관련 데이터 날려주기 (axios) (rest api)

          await client.mutate<
            Pick<IMutation, "createPointTransactionOfLoading">,
            IMutationCreatePointTransactionOfLoadingArgs
          >({
            mutation: CREATE_POINT_TRANSACTION_OF_LOADING,
            variables: { impUid: rsp.imp_uid },
          });

          Modal.success({ content: "결제에 성공하셨습니다." });
        } else {
          // 결제 실패 시
          Modal.error({ content: "다시 시도해주세요" });
        }
      }
    );
  };

  return (
    <>
      <S.Payment onClick={onClickPayment}>충전하기</S.Payment>
    </>
  );
}
