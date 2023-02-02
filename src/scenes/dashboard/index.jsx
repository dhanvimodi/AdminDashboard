import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";

import { tokens } from "../../theme";
import Header from "../../components/Header";
import ProgressCircle from "../../components/ProgressCircle";
import StatBox from "../../components/StatBox";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import GeographyChart from "../../components/GeographyChart";
import { mockTransactions } from "../../data/mockData";

const Dashboard = () => {
	const theme = useTheme();
	const colors = tokens(theme.palette.mode);
	return (
		<Box m="20px">
			<Box
				display="flex"
				justifyContent="space-between"
				alignItems="center"
			>
				<Header
					title="DASHBOARD"
					subTitle="Welcome to Dashboard"
				/>

				<Box>
					<Button
						sx={{
							backgroundColor: colors.blueAccent[700],
							color: colors.grey[100],
							fontSize: "14px",
							fontWeight: "bold",
							padding: "10px 20px",
						}}
					>
						<DownloadOutlinedIcon sx={{ mr: "10px" }} />
						Download Reports
					</Button>
				</Box>
			</Box>

			{/* Grid */}
			<Box
				display="grid"
				gridTemplateColumns="repeat(12,1fr)"
				gridAutoRows="140px"
				gap="20px"
			>
				{/* Row 1 */}

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
				>
					<StatBox
						title="13,890"
						subtitle="E-mails Sent"
						progress={0.75}
						increase="+14%"
						icon={
							<EmailIcon
								sx={{
									color: colors.greenAccent[700],
									fontSize: "26px",
								}}
							/>
						}
					/>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
				>
					<StatBox
						title="40,000"
						subtitle="Sales obtained"
						progress={0.65}
						increase="+21%"
						icon={
							<PointOfSaleIcon
								sx={{
									color: colors.greenAccent[700],
									fontSize: "26px",
								}}
							/>
						}
					/>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
				>
					<StatBox
						title="32,890"
						subtitle="New Clients"
						progress={0.15}
						increase="+5%"
						icon={
							<PersonAddIcon
								sx={{
									color: colors.greenAccent[700],
									fontSize: "26px",
								}}
							/>
						}
					/>
				</Box>

				<Box
					display="flex"
					justifyContent="center"
					alignItems="center"
					gridColumn="span 3"
					backgroundColor={colors.primary[400]}
				>
					<StatBox
						title="1,423,890"
						subtitle="Traffic Inbound"
						progress={0.85}
						increase="+40%"
						icon={
							<TrafficIcon
								sx={{
									color: colors.greenAccent[700],
									fontSize: "26px",
								}}
							/>
						}
					/>
				</Box>

				{/* Row 2 */}

				<Box
					gridColumn="span 8"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						mt="25px"
						p="0 30px"
					>
						<Box>
							<Typography
								variant="h5"
								fontWeight="600"
								color={colors.grey[100]}
							>
								Revenue Generated
							</Typography>
							<Typography
								variant="h3"
								fontWeight="500"
								color={colors.greenAccent[500]}
							>
								$3,125,764
							</Typography>
						</Box>
						<Box>
							<IconButton>
								<DownloadOutlinedIcon
									sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
								/>
							</IconButton>
						</Box>
					</Box>

					<Box
						height="250px"
						mt="-20px"
					>
						<LineChart isDashboard={true} />
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					overflow="auto"
				>
					<Box
						display="flex"
						justifyContent="space-between"
						alignItems="center"
						borderBottom={`4px solid ${colors.primary[500]}`}
						colors={colors.grey[100]}
						p="15px"
					>
						<Typography
							variant="h5"
							fontWeight="600"
							color={colors.grey[100]}
						>
							Recent Transactions
						</Typography>
					</Box>
					{mockTransactions.map((transaction, i) => (
						<Box
							key={i}
							display="flex"
							justifyContent="space-between"
							alignItems="center"
							borderBottom={`4px solid ${colors.primary[500]}`}
							p="15px"
						>
							<Box>
								<Typography
									variant="h5"
									fontWeight="600"
									color={colors.greenAccent[500]}
								>
									{transaction.txId}
								</Typography>
								<Typography color={colors.grey[100]}>
									{transaction.user}
								</Typography>
							</Box>
							<Box color={colors.grey[100]}>{transaction.date}</Box>
							<Box
								color={colors.greenAccent[500]}
								borderRadius="4px"
								p="5px 10px"
							>
								${transaction.cost}
							</Box>
						</Box>
					))}
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography
						variant="h5"
						fontWeight="600"
					>
						Campaign
					</Typography>
					<Box
						display="flex"
						flexDirection="column"
						alignItems="center"
						mt="25px"
					>
						<ProgressCircle size={125} />
						<Typography
							variant="h5"
							color={colors.greenAccent[500]}
							mt="15px"
						>
							$48,352 generated
						</Typography>
						<Typography
							variant="h5"
							fontWeight="600"
						>
							Includes extra misc expenditures and costs
						</Typography>
					</Box>
				</Box>

				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
				>
					<Typography
						variant="h5"
						fontWeight="600"
						p="30px 30px 0 30px"
					>
						Sales Quantity
					</Typography>
					<Box
						height="280px"
						width="350px"
						mt="-20px"
						ml="-5px"
					>
						<BarChart isDashboard={true} />
					</Box>
				</Box>
				<Box
					gridColumn="span 4"
					gridRow="span 2"
					backgroundColor={colors.primary[400]}
					p="30px"
				>
					<Typography
						variant="h5"
						fontWeight="600"
						mb="15px"
					>
						Geography Based Traffic
					</Typography>
					<Box
						height="250px"
						mt="-20px"
					>
						<GeographyChart isDashboard={true} />
					</Box>
				</Box>
			</Box>
		</Box>
	);
};

export default Dashboard;
