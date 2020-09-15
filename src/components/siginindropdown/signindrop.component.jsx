import React from "react";

import "./signindrop.styles.scss";

//component
import SideBar from "../siginsidebar/siginsidebar.component";
import SignInForm from "../signinform/signinform.component";

//icons
import InsertChartOutlinedOutlinedIcon from "@material-ui/icons/InsertChartOutlinedOutlined";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import CardGiftcardIcon from "@material-ui/icons/CardGiftcard";

function SignInDrop() {
  return (
    <div className="signin-drop">
      <div className="sidebar">
        <div className="sidebar-upper">
          <SideBar
            icon
            Icon={InsertChartOutlinedOutlinedIcon}
            text="my wishlists"
          />

          <SideBar icon Icon={BookmarkBorderIcon} text="my deals" />
          <SideBar icon Icon={CardGiftcardIcon} text="my coupons" />
        </div>

        <div className="sidebar-lower">
          <SideBar text="accounts" />
          <SideBar text="profile" />
          <SideBar text="redeem gift card" />
          <SideBar text="refer friends, get $10" />
          <SideBar text="not a member? sign up" />
        </div>
      </div>

      <SignInForm />
    </div>
  );
}

export default SignInDrop;
