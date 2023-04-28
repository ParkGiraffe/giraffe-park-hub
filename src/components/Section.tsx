import ParkText from "./ParkText";
import Frame from "./Frame";
import LinkButton from "./LinkButton";
import DesText from "./DesText";
import Icon from "./Icon";
import PagePreview from "./PagePreview";

const Section = (props: { park: string }) => {
  return(
    <Frame>
      <Icon park={props.park}/>
      <ParkText>{props.park} Park</ParkText>
      <DesText park={props.park}/>
      <PagePreview park={props.park}/>
    </Frame>
  )
}

export default Section;