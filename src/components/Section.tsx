import ParkText from "./ParkText";
import Frame from "./Frame";
import LinkButton from "./LinkButton";
import DesText from "./DesText";
import Icon from "./Icon";

const Section = () => {
  return(
    <Frame>
      <Icon />
      <ParkText>Blog Park</ParkText>
      {/* <LinkButton /> */}
      <DesText/>
    </Frame>
  )
}

export default Section;