import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";

import { mockDataInvoices } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Invoices = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: "id",
			headerName: "ID",
			flex: 0.5,
		},
		{
			field: "name",
			headerName: "Name",
			flex: 1,
			cellClassName: "name-column__cell",
		},
		{
			field: "email",
			headerName: "E-mail",
			flex: 1,
		},
		{
			field: "phone",
			headerName: "Phone Number",
			flex: 1,
		},
		{
			field: "cost",
			headerName: "Cost",
			render: ({ row: { cost } }) => {
				return <Typography color={colors.greenAccent[300]}>${cost}</Typography>;
			},
			flex: 1,
		},
		{
			field: "date",
			headerName: "Date",
			flex: 1,
		},
	];

	return (
		<Box
			m="20px"
			height={document.documentElement.clientHeight}
		>
			<Header
				title="Invoices"
				subTitle="List of Invoice"
			/>
			<Box
				m="40px 0 0 0"
				height="120%"
				sx={{
					"& .MuiDataGrid-root": {
						border: "none",
					},
					"& .MuiDataGrid-cell": {
						borderBottom: "none",
					},
					"& .name-column__cell": {
						color: colors.greenAccent[300],
					},
					"& .MuiDataGrid-columnHeaders": {
						backgroundColor: colors.blueAccent[700],
						borderBottom: "none",
					},
					"& .MuiDataGrid-virtualScroller": {
						backgroundColor: colors.primary[400],
					},
					"& .MuiDataGrid-footerContainer": {
						borderTop: "none",
						backgroundColor: colors.blueAccent[700],
					},
					"& .MuiCheckbox-root": {
						color: `${colors.greenAccent[200]} !important`,
					},
				}}
			>
				<DataGrid
					checkboxSelection
					rows={mockDataInvoices}
					columns={columns}
				/>
			</Box>
		</Box>
	);
};

export default Invoices;
