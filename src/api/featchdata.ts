import { GetServerSideProps } from "next";

export const getServerSidePropss: GetServerSideProps = async () => {
  const res = await fetch("http://13.214.54.19:5000/events");
  const data = await res.json();
  return {
    props: {
      data,
    },
  };
};
