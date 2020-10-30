import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faInstagram
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow() {
  return (
    <div className="center">
      <a
        href="https://www.facebook.com/DVOUTFITS/"
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebookSquare} size="2x" />
      </a>
      <a
        href="https://www.instagram.com/outfitsdv/"
        className="instagram social"
      >
        <FontAwesomeIcon icon={faInstagram} size="2x" />
      </a>
    </div>
  );
}
