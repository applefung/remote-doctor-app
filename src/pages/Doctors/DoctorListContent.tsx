import { Avatar, Box, Button, Typography } from "@mui/material";

import SearchBar from "shared/SearchBar";
import { increment } from "shared/utils";
import { increment as incrementFromContainer } from "container/reducers";
// import { increment as incrementRedux } from "shared/reducers";
import { mockDoctorData } from "../../constants/mock";
import { useAppSelector } from "shared/hooks";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

interface Doctor {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  specialty: string;
  district: string;
}

const DoctorListContent = () => {
  const [doctors, setDoctors] = useState<Doctor[]>(mockDoctorData);
  const [count, setCount] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const countRedux = useAppSelector((state: any) => state.counter.value);

  return (
    <>
      <Box>
        <SearchBar
          placeholder="Search doctor"
          onSubmit={(value: Record<"search", string>) => {
            const doctors = mockDoctorData.filter(({ name }) =>
              name.toLowerCase().includes(value.search.toLowerCase())
            );
            setDoctors(doctors);
          }}
        />
        <Box
          display="grid"
          gridTemplateColumns="auto auto auto"
          gap="40px"
          marginTop="10px"
        >
          {doctors.map(({ name, id }, index) => (
            <Box
              display="flex"
              alignItems="center"
              flexDirection="column"
              key={index}
              gap="40px"
              border="1px solid grey"
              padding="10px"
              onClick={() => navigate(`/doctors/${id}`)}
            >
              <Avatar />
              <Box>
                <Typography sx={{ color: "black" }}>{name}</Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box marginTop="10px">
          <Typography variant="h3">Share util</Typography>
          <Button
            onClick={() => {
              setCount((prev) => increment(prev));
            }}
          >
            Click me to increase the count: {count} .
          </Button>
        </Box>

        <Box marginTop="10px">
          <Typography variant="h3">Share redux</Typography>
          <Button
            onClick={() => {
              dispatch(incrementFromContainer());
            }}
          >
            Click me to increase the count: {countRedux} .
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default DoctorListContent;
