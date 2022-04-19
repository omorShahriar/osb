import { useInView } from "react-intersection-observer";
import {
  IncomeChart,
  BookValueChart,
  TotalAssetsChart,
  TotalLoansChart,
  TotalDepositsChart,
} from "components/Charts";

const IncomeChartBox = () => {
  const { ref: inViewRef, inView: showChart } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={inViewRef} style={{ height: 400 }}>
      {showChart && <IncomeChart />}
    </div>
  );
};
const BookValueChartBox = () => {
  const { ref: inViewRef, inView: showChart } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={inViewRef} style={{ height: 400 }}>
      {showChart && <BookValueChart />}
    </div>
  );
};
const TotalAssetsChartBox = () => {
  const { ref: inViewRef, inView: showChart } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={inViewRef} style={{ height: 400 }}>
      {showChart && <TotalAssetsChart />}
    </div>
  );
};
const TotalLoansChartBox = () => {
  const { ref: inViewRef, inView: showChart } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={inViewRef} style={{ height: 400 }}>
      {showChart && <TotalLoansChart />}
    </div>
  );
};
const TotalDepositsChartBox = () => {
  const { ref: inViewRef, inView: showChart } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });
  return (
    <div ref={inViewRef} style={{ height: 400 }}>
      {showChart && <TotalDepositsChart />}
    </div>
  );
};

export {
  IncomeChartBox,
  BookValueChartBox,
  TotalAssetsChartBox,
  TotalLoansChartBox,
  TotalDepositsChartBox,
};
