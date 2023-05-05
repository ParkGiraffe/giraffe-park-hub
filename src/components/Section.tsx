import ParkText from "./ParkText";
import Frame from "./Frame";
import DesText from "./DesText";
import Icon from "./Icon";
import PagePreview from "./PagePreview";

const Section = (props: { park: string }) => {
  const link = () => {
    if (props.park === "Blog") {
      window.open("https://arnopark.tistory.com/", "_blank");
    } else if (props.park === "GitHub") {
      window.open("https://github.com/ParkGiraffe/", "_blank");
    } else {
      console.log("not yet");
    }
  };

  return (
    <Frame onClick={link}>
      <Icon park={props.park} />
      <ParkText>{props.park} Park</ParkText>
      <DesText park={props.park} />
      <PagePreview park={props.park} />
    </Frame>
  );
};

export default Section;
