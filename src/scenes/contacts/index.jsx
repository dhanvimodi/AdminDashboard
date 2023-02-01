import { Box, useTheme } from "@mui/material";
import { DataGrid, GridToolbar } from "@mui/x-data-grid";

import { mockDataContacts } from "../../data/mockData";
import { tokens } from "../../theme";
import Header from "../../components/Header";

const Contacts = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);

	const columns = [
		{
			field: "id",
			headerName: "ID",
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
			field: "address",
			headerName: "Address",
			flex: 1,
		},
		{
			field: "city",
			headerName: "City",
		},
		{
			field: "zipCode",
			headerName: "Zip Code",
		},
		{
			field: "age",
			headerName: "Age",
			headerAlign: "left",
			align: "left",
		},
		{
			field: "registrarId",
			headerName: "Registrar ID",
			headerAlign: "left",
			align: "left",
		},
	];

	return (
		<Box m="20px">
			<Header
				title="CONTACTS"
				subTitle="List of Contacts"
			/>
			<Box
				m="40px 0 0 0"
				height="75vh"
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
					"& .MuiDataGrid-toolbarContainer .MuiButton-text": {
						color: `${colors.grey[100]} !important`,
					},
				}}
			>
				<DataGrid
					rows={mockDataContacts}
					columns={columns}
					components={{ Toolbar: GridToolbar }}
				/>
			</Box>
		</Box>
	);
};

export default Contacts;
