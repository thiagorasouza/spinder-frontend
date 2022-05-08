import { useState } from "react";

import { AppMenu } from "../components/AppMenu";
import { CoverSwipe } from "../components/CoverSwipe";
import { GenreMenu } from "../components/GenreMenu";
import { Header } from "../components/Header";

function MainPage() {
  const [showGenreMenu, setShowGenreMenu] = useState(false);
  const [showAppMenu, setShowAppMenu] = useState(false);

  const openGenreMenu = () => setShowGenreMenu(true);
  const closeGenreMenu = () => setShowGenreMenu(false);

  const openAppMenu = () => setShowAppMenu(true);
  const closeAppMenu = () => setShowAppMenu(false);

  return (
    <>
      <Header appMenuClick={openAppMenu} genreMenuClick={openGenreMenu} />
      <CoverSwipe />

      <AppMenu show={showAppMenu} onHide={closeAppMenu} />
      <GenreMenu show={showGenreMenu} onHide={closeGenreMenu} />
    </>
  );
}

export { MainPage };
