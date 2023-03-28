import styled from "styled-components";

export const Event = styled.div`
  height: 100%;
  weight: 100%;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  & > .cardBox {
    height: 100%;
    width: 100%;
    flex-grow: 1;
    gap: 1rem;
    display: flex;
    flex-direction: column;
    padding-bottom: 20px;

    & > .cardContainer {
      background-color: #ffffff;
      box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
      padding-top: 1rem /* 16px */;
      padding-bottom: 1rem /* 16px */;
      /* width: 100%;
      max-width: 100%; */
      border-radius: 0.5rem /* 8px */;
      padding-left: 2.5rem /* 40px */;
      padding-right: 2.5rem /* 40px */;
      display: flex;
      justify-content: space-between;
      gap: 2rem /* 32px */;
      margin-left: 16px;
      margin-right: 16px;

      & > .cardDetail-Layer1 {
        width: 100%;
        display: flex;
        flex-direction: column;
        padding-top: 1.5rem /* 24px */;
        padding-bottom: 1.5rem /* 24px */;
        gap: 2rem /* 32px */;

        .cardDate {
          display: flex;
          gap: 1.25rem;

          & > .span1 {
            vertical-align: sub;
            font-size: medium;
            font-weight: 600;
            color: #000000;
          }
          & > .span2 {
            vertical-align: sub;
            font-size: medium;
            color: #bebebe;
          }
        }
        .spanMinutes {
          vertical-align: sub;
          font-size: medium;
          font-weight: 600;
          color: #bebebe;
        }
        .detailData {
          display: flex;
          gap: 0.5rem;
          .span-detail {
            --tw-bg-opacity: 0.5;
            padding-left: 0.5rem /* 8px */;
            padding-right: 0.5rem /* 8px */;
            font-weight: 600;
            text-transform: capitalize;
            color: #000000;
          }
        }
      }
    }
    /* clsx("flex", "flex-col", "py-6", "gap-8") */
  }
`;
