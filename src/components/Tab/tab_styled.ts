import styled from "styled-components";

export const TabStyled = styled.div`
  display: flex;
  gap: 1.75rem;
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
  margin-left: 16px;
  /* bottom-width: 1px;
  border-style: solid; */
  /* border-color: #2f4f4f; */
`;

interface TabProps {
  id: string;
  activeTab: string;
  isDisbled: boolean;
}
export const TabSpan = styled.span<TabProps>`
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props: TabProps) =>
    props.activeTab == props.id ? "blue" : "gray"};
  font-weight: bold;
  font-size: 16px;
  border-radius: 0.125rem;
  /* border-width: 4px; */
  border-radius: 3px;
  border-bottom: ${(props: TabProps) =>
    props.activeTab == props.id ? "4px blue solid" : "border-transparent"};
  cursor: ${(props: TabProps) => (props.isDisbled ? "not-allowed" : "pointer")};
`;
