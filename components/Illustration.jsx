import { portfolioSettings } from "../utils/portfolioSettings";

function Illustration(props) {
  const colors = [
    portfolioSettings.contentGithub.calendarTheme.level3,
    portfolioSettings.contentGithub.calendarTheme.level2,
    portfolioSettings.contentGithub.calendarTheme.level1,
  ];
  return (
    <svg fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle cx={150} cy={55} r={45} fill={colors[2]} />
      <circle cx={60} cy={110} r={32} fill={colors[1]}/>
      <circle cx={20} cy={170} r={16} fill={colors[0]} />
      {/* <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M486 144.469c-38.145-31.86-87.255-51.033-140.842-51.033-121.415 0-219.842 98.427-219.842 219.842 0 14.167 1.34 28.02 3.9 41.441 47.414-86.154 91.678-142.17 146.717-170.767 56.069-29.132 121.816-29.08 210.067-6.68v-32.803zm0 48.288v289.33c-38.145 31.86-87.255 51.033-140.842 51.033-100.321 0-184.947-67.197-211.325-159.037l1.502.805c49.937-93.22 94.046-149.844 147.514-177.625 52.014-27.025 114.411-27.498 203.151-4.506z"
        fill="currentColor"
      /> */}
    </svg>
  );
}

export default Illustration;
