import { Avatar, Box, Typography } from "@mui/material";

import Wrapper from "shared/Wrapper";
import { mockDoctorData } from "../../constants/mock";
import { useParams } from "react-router-dom";

const Detail = () => {
  const { id } = useParams();
  const doctor = mockDoctorData.find((item) => item.id === Number(id));

  if (!doctor) {
    return "Doctor not found";
  }

  return (
    <Wrapper title="Doctor Detail">
      <Box
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        gap="10px"
      >
        <Avatar />
        <Box>
          {
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              flexDirection="column"
              gap="40px"
              border="1px solid grey"
              padding="10px"
              sx={{ color: "black" }}
            >
              <Typography variant="h6">Doctor ID: {id}</Typography>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Name</Typography>
                <Typography>{doctor?.name}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Phone</Typography>
                <Typography>{doctor?.phone}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Email</Typography>
                <Typography>{doctor?.email}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Address</Typography>
                <Typography>{doctor?.address}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>Specialty</Typography>
                <Typography>{doctor?.specialty}</Typography>
              </Box>
              <Box display="flex" gap="10px">
                <Typography sx={{ fontWeight: 600 }}>District</Typography>
                <Typography>{doctor?.district}</Typography>
              </Box>
            </Box>
          }
        </Box>
      </Box>
    </Wrapper>
  );
};

export default Detail;
