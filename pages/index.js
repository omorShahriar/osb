import Head from "next/head";

import Header from "components/Header";

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
import Footer from "components/Footer";
import HeroArea from "components/sections/HeroArea";

export default function Home() {
  return (
    <>
      <Head>
        <title>Oconee State Bank Annual Report</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header />
      <main className=" container mx-auto ">
        <HeroArea />
        <CorporateProfile />
        <PresidentLetter />
        <FinancialHighlights />
        <DigitalHighlights />
        <AssetQualityHighlights />
        <Teams />
        <TeamExpansions />
        <ExecutiveLeadership />
        <BoardOfDirectors />
        <AdvisoryCommittee />
        <JuniorBoardOfDirectors />
        <WhoWeAre />
        <CoreValues />
        <TheRemarkableFoundation />
        <Footer />
      </main>
    </>
  );
}
