import React from "react";
import { Link, NavLink } from "react-router-dom";
import { Stack } from "@mui/material";
import Logo from "../assets/logo-removebg-preview (1).png";
export default function Navbar() {
  return (
    <Stack
      className="NavbarMainStack"
      direction="row"
      alignItems="center"
      sx={{
        gap: { sm: "40px", xs: "20px" },
        mt: { sm: "32px", xs: "20px" },
      }}
      px="20px"
    >
      <Link to="/">
        <img
          src={Logo}
          alt="logo"
          style={{ width: "250px", height: "100px", margin: "0 20px" }}
        />
      </Link>
      {/* <Stack
                direction="row"
                gap='30px'
                fontSize="24px"
                alignItems="flex-end"
            >

                <Link to="/" className= 'NavLink'
                 style={{ textDecoration: "none", color: "#3a1212"}}
                 >Home</Link>
                <Link to="#exercise" className= 'NavLink' style={{ textDecoration: "none", color: "#3a1212" }}>Exercise</Link>
            </Stack> */}
    </Stack>
  );
}
