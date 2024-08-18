import DoneAllOutlinedIcon from "@mui/icons-material/DoneAllOutlined";
import ViewInArOutlinedIcon from "@mui/icons-material/ViewInArOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import ApiOutlinedIcon from "@mui/icons-material/ApiOutlined";
import LocalShippingOutlinedIcon from "@mui/icons-material/LocalShippingOutlined";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";
import LoyaltyOutlinedIcon from "@mui/icons-material/LoyaltyOutlined";
import LaptopChromebookOutlinedIcon from "@mui/icons-material/LaptopChromebookOutlined";
import DeviceHubOutlinedIcon from "@mui/icons-material/DeviceHubOutlined";

import Card from "./components/Card";
import MiniCard from "./components/MiniCard";
import TestFile from "./components/TestFile";

const App = () => {
  return (
    <>
      <div className="flex items-center justify-center">
        <div className="container">
          <div className="mb-10 grid grid-cols-5 gap-10">
            <Card
              title="Orders Today"
              price={587.55}
              hasCash={true}
              image={<DoneAllOutlinedIcon fontSize="large" />}
              className="bg-emerald-400"
            />

            <Card
              title="Orders Yesterday"
              price={3250.27}
              hasCash={true}
              image={<ViewInArOutlinedIcon fontSize="large" />}
              className="bg-red-400"
            />

            <Card
              title="This Month"
              price={5436.11}
              hasCash={false}
              image={<CalendarTodayOutlinedIcon fontSize="large" />}
              className="bg-purple-400"
            />

            <Card
              title="Last Month"
              price={8032.51}
              hasCash={false}
              image={<CakeOutlinedIcon fontSize="large" />}
              className="bg-orange-400"
            />

            <Card
              title="All-Time Sales"
              price={32133.98}
              hasCash={false}
              image={<AllInclusiveOutlinedIcon fontSize="large" />}
              className="bg-lime-400"
            />
          </div>

          <div className="grid grid-cols-4 gap-4">
            <MiniCard
              title="Total Orders"
              value={32}
              image={<ApiOutlinedIcon />}
            />

            <MiniCard
              title="Orders Pending"
              value={55}
              image={<LocalShippingOutlinedIcon />}
              className="bg-amber-500"
            />

            <MiniCard
              title="Orders Processing"
              value={62}
              image={<RocketLaunchOutlinedIcon />}
              className="bg-lime-500"
            />

            <MiniCard
              title="Orders Delivered"
              value={232}
              image={<LoyaltyOutlinedIcon />}
              className="bg-cyan-500"
            />
            <TestFile image={<LaptopChromebookOutlinedIcon />} title="hatdog" />
            <TestFile image={<DeviceHubOutlinedIcon />} title="card number 2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
