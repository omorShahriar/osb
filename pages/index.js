import Head from "next/head";

import Header from "components/Header";
import MapBox from "components/MapBox";
import CorporateProfile from "components/sections/CorporateProfile";
import PresidentLetter from "components/sections/PresidentLetter";
import FinancialHighlights from "components/sections/FinancialHighlights";
import DigitalHighlights from "components/sections/DigitalHighlights";
import AssetQualityHighlights from "components/sections/AssetQualityHighlights";
import Teams from "components/sections/Teams";
import TeamExpansions from "components/sections/TeamExpansions";
import ExecutiveLeadership from "components/sections/ExecutiveLeadership";
import BoardOfDirectors from "components/sections/BoardOfDirectors";
import JuniorBoardOfDirectors from "components/sections/JuniorBoardOfDirectors";
import WhoWeAre from "components/sections/WhoWeAre";
import CoreValues from "components/sections/CoreValues";
import TheRemarkableFoundation from "components/sections/TheRemarkableFoundation";
import AdvisoryCommittee from "components/sections/AdvisoryCommittee";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oconee State Bank Annual Report</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className=" container mx-auto ">
        <h1 className=" text-6xl font-slab tracking-wide   text-center mt-12 pb-6  text-transparent bg-clip-text bg-gradient-to-tl from-emerald-600 to-blue-600 ">
          2021: Expansion, Growth, and Transformation
        </h1>
        <MapBox />
        <CorporateProfile />
        <PresidentLetter />
        <FinancialHighlights />
        <DigitalHighlights />
        <AssetQualityHighlights />
        <Teams />
        <TeamExpansions />
        <ExecutiveLeadership />
        <AdvisoryCommittee />
        <BoardOfDirectors />
        <JuniorBoardOfDirectors />
        <WhoWeAre />
        <CoreValues />
        <TheRemarkableFoundation />
      </main>
    </>
  );
}
