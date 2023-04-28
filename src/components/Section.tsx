import ParkText from "./ParkText";
import Frame from "./Frame";
import LinkButton from "./LinkButton";
import DesText from "./DesText";
import Icon from "./Icon";
import PagePreview from "./PagePreview";

const Section = () => {
  return(
    <Frame>
      <Icon />
      <ParkText>Blog Park</ParkText>
      {/* <LinkButton /> */}
      <DesText/>
      <PagePreview />
    </Frame>
  )
}

export default Section;