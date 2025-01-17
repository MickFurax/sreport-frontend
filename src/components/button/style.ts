import Color from "color";
import { createUseStyles } from "react-jss";

const useStyles = createUseStyles((theme) => ({
  container: {
    height: 44,
    minWidth: 44,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    border: {
      width: 0,
      radius: 8,
    },

    "&:hover": {
      border: {
        radius: 12,
      },
    },

    transition: "border-radius 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
  },

  variantDefault: {
    backgroundColor: theme.colors.surface,
    color: theme.colors.primary,

    "&:hover": {
      backgroundColor: theme.colors.primary,
      color: theme.colors.onPrimary,
    },
  },
  variantPrimary: {
    backgroundColor: theme.colors.primary,
    color: theme.colors.onPrimary,

    "&:hover": {
      backgroundColor: Color(theme.colors.primary).lighten(0.2).string(),
    },
  },
  variantSecondary: {
    backgroundColor: theme.colors.secondary,
    color: theme.colors.onSecondary,

    "&:hover": {
      backgroundColor: Color(theme.colors.secondary).darken(0.1).string(),
    },
  },

  label: {
    marginLeft: 4,
    marginRight: 4,
  },

  loadingIcon: {
    animation: "spin 1s linear infinite",
  },
}));

export default useStyles;
