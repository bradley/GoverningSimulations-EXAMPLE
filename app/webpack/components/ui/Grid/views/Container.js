import styled from "styled-components";
import { media, Container as sbgContainer } from "styled-bootstrap-grid";

const Container = styled(sbgContainer)`
  max-width: none!important; // Override SBG container max-width;
`;

export default Container;
