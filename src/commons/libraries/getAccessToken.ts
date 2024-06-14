import { GraphQLClient, gql } from "graphql-request";
import type { IMutation } from "../types/generated/types";

const RESTORE_ACCESS_TOKEN = gql`
  mutation {
    restoreAccessToken {
      accessToken
    }
  }
`;

export const getAccessToken = async (): Promise<string | undefined> => {
  try {
    const graphQLClient = new GraphQLClient(
      "https://backend-practice.codebootcamp.co.kr/graphql",
      { credentials: "include" }
    );

    const result = await graphQLClient.request<
      Pick<IMutation, "restoreAccessToken">
    >(RESTORE_ACCESS_TOKEN);

    const newAccessToken = result.restoreAccessToken.accessToken;
    return newAccessToken;
  } catch (error) {
    // 이걸 활성화 시키면 JWT error가 발생하는데 로그인 하지 않은 상태에서 새로고침 하게되면
    // refreshToken이 존재하지 않기 때문에 백엔드에 전송하지 못해서 생기는 문제다. ==> 백엔드에게 보여주는 오류이기 때문에 주석 처리해놔도 될듯
    // if (error instanceof Error) alert(error.message);
  }
};
