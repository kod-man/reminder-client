import { Grid, useMediaQuery } from "@chakra-ui/react";
import Card from "./Card";

const data = [
  {
    src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/ae01c415678c90d0c606bc6917758502.jpg",
    text1: "30 million+",
    text2: "app dowloads",
  },
  {
    src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/573fa908fbccdf1600f90f16a0c2e311.jpg",
    text1: "15 years+",
    text2: "in business ",
  },
  {
    src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/87ded242639ba32ef4d0e6c21c9f30aa.jpg",
    text1: "2 billion+",
    text2: "tasks completed",
  },
  {
    src: "https://d3ptyyxy2at9ui.cloudfront.net/assets/images/ba90575091d9eafd60f851f7297cb202.jpg",
    text1: "1 million+",
    text2: "pro users ",
  },
];

const BgPics = () => {
  const [isLargerThan800] = useMediaQuery("(min-width: 800px)");

  if (isLargerThan800) {
    return (
      <Grid
        templateRows="repeat(2, 1fr)"
        templateColumns="repeat(2, 1fr)"
        maxWidth="400"
        maxH="700"
        ml={20}
      >
        <>
          {data.map((item) => (
            <Card key={item.src} src={item.src} text1={item.text1} text2={item.text2} />
          ))}
        </>
      </Grid>
    );
  }
  return null;
};

export default BgPics;
