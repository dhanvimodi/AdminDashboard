import { Box } from "@mui/material";
import { useTheme } from "@mui/material";
import { tokens } from "../../theme";
import GeographyChart from "../../components/GeographyChart";
import Header from "../../components/Header";

const Geography = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Header
				title="GEOGRAPHY CHART"
				subTitle="A simple geography chart"
			/>
			<Box
				height="75vh"
				width="70vw"
				border={`1px solid ${colors.grey[100]}`}
				borderRadius="4px"
				marginLeft="3vw"
			>
				<GeographyChart />
			</Box>
		</Box>
	);
};
export default Geography;
