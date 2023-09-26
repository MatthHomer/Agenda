import React, { useContext, useState } from "react";
import {
  Box,
  IconButton,
  Typography,
  useTheme,
  InputBase,
  Button,
} from "@mui/material";
import { ColorModeContext, tokens } from "../../theme";
import { MenuItem } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import WysiwygIcon from '@mui/icons-material/Wysiwyg';

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const handleClick = () => {
    setSelected(title);
  };

  return (
    <MenuItem
      active={selected === icon}
      style={{
        color: colors.grey[100],
      }}
      onClick={handleClick}
    >
      <Link to={to}>{icon}</Link>
    </MenuItem>
  );
};

const Topbar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      display="flex"
      alignItems="center"
      p={3}
    >
      <Box display="flex" alignItems="center" flex={2} >
        <img
          alt="logo"
          width="auto"
          height="auto"
          src={`../../assets/logo.png`}
          style={{ cursor: "pointer" }}
        />
      </Box>

      <Box display="flex" padding={1} paddingLeft={100}>
        <Typography variant="body1" sx={{ marginRight: 4 }} fontSize={20}>
          Início
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 4 }} fontSize={20}>
          Sobre
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 4 }} fontSize={20}>
          Notícias
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 4 }} fontSize={20}>
          Local
        </Typography>
        <Typography variant="body1" sx={{ marginRight: 4 }} fontSize={20}>
          Agendamentos
        </Typography>
      </Box>

      {/* ICONS */}
      <Box flex={1}>
        <Link to="/calendar">
          <WysiwygIcon
            title="Entrar"
            selected={selected}
            setSelected={setSelected}
          />
        </Link>
      </Box>

      <Box>
      <section class="home" id="home">
                <div class="home__data">
                    <div class="banner-wrapper">
                    </div>
                </div>

            </section>
      </Box>
    </Box>

  );
};

export default Topbar;
