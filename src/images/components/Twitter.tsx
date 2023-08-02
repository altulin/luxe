import React, { FC } from "react";

const TwitterIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M15.0215 3.34365C15.5299 3.25656 16.0992 3.22749 16.635 3.31813C17.5918 3.48001 18.4757 3.92474 19.1744 4.5915C19.6311 4.60183 20.0799 4.51186 20.477 4.38359C20.8131 4.27504 21.097 4.14397 21.296 4.04033C21.3949 3.9888 21.4713 3.94484 21.521 3.91509C21.5458 3.90023 21.5638 3.88898 21.5745 3.88219L21.5841 3.87613C21.8809 3.6784 22.2761 3.71689 22.529 3.96839C22.7819 4.21996 22.8226 4.61488 22.6264 4.91278C22.4187 5.22807 22.1303 5.79015 21.8073 6.4199C21.7565 6.51892 21.7048 6.61962 21.6525 6.72129C21.4672 7.08125 21.2772 7.44507 21.1001 7.7572C20.9889 7.95318 20.87 8.15216 20.7501 8.3241V8.59788C20.7577 9.6035 20.6424 10.6039 20.4083 11.5771C20.261 12.1894 20.0667 12.791 19.8265 13.3764C19.2041 14.8931 18.2857 16.2705 17.1249 17.4283C15.9642 18.586 14.5844 19.5009 13.0662 20.1194C11.5492 20.7374 9.9245 21.0472 8.28665 21.0308C5.91234 21.0328 3.58798 20.3488 1.59326 19.0608C1.29945 18.8711 1.17576 18.5036 1.29509 18.1748C1.41443 17.8461 1.74512 17.6435 2.09219 17.6864C2.39255 17.7236 2.69496 17.7418 2.99762 17.7408C4.08507 17.7377 5.15181 17.4975 6.12567 17.0448C5.81612 16.9039 5.52058 16.7301 5.24443 16.5254C4.43271 15.9235 3.8288 15.0835 3.51673 14.1224C3.43564 13.8726 3.49108 13.5986 3.66289 13.4001C3.66597 13.3965 3.66908 13.393 3.67221 13.3895C3.48869 13.2258 3.31696 13.0477 3.15886 12.856C2.44754 11.9938 2.05587 10.9124 2.05009 9.79465L2.05007 9.79077L2.05008 9.74077C2.05008 9.47491 2.19083 9.22891 2.42003 9.09419C2.47813 9.06004 2.53972 9.03433 2.60307 9.01709C2.26473 8.34201 2.08879 7.59656 2.09007 6.84031C2.08968 5.98354 2.31347 5.14157 2.73923 4.39807C2.86214 4.18343 3.08297 4.0432 3.3295 4.02322C3.57603 4.00324 3.81656 4.1061 3.97242 4.29814C4.93498 5.48416 6.13626 6.45441 7.49825 7.14588C8.19839 7.50134 8.93294 7.77903 9.68874 7.97547C10.1125 8.0856 10.5429 8.17018 10.9777 8.22861C10.9585 7.50535 11.1013 6.78248 11.4011 6.11455C11.8407 5.13473 12.5932 4.32855 13.5404 3.82246C13.9416 3.60813 14.4741 3.43742 15.0215 3.34365ZM3.74335 10.8911C3.873 11.256 4.06586 11.5983 4.31592 11.9014C4.80724 12.497 5.48919 12.9045 6.24641 13.0552C6.58369 13.1223 6.83213 13.4102 6.84916 13.7536C6.86618 14.0971 6.64743 14.4082 6.31843 14.5083C6.04594 14.5912 5.76676 14.649 5.48441 14.6811C5.67099 14.9216 5.89047 15.137 6.13787 15.3205C6.69906 15.7366 7.376 15.9675 8.07451 15.9809C8.39143 15.987 8.6703 16.1917 8.77112 16.4922C8.87195 16.7927 8.77296 17.1242 8.52386 17.3202C7.47469 18.1457 6.26149 18.7214 4.97594 19.0153C6.04142 19.3565 7.15887 19.5321 8.28916 19.5308L8.29786 19.5308C9.73792 19.5457 11.1665 19.2736 12.5002 18.7303C13.8339 18.1869 15.046 17.3833 16.0656 16.3663C17.0853 15.3492 17.892 14.1392 18.4388 12.8069C18.6498 12.2927 18.8205 11.7642 18.9499 11.2263C19.1557 10.3706 19.257 9.4909 19.2501 8.60663L19.2501 8.60077V8.07077C19.2501 7.88892 19.3161 7.71326 19.436 7.57649C19.5053 7.49744 19.6264 7.31489 19.7955 7.01699C19.9561 6.73386 20.1339 6.39395 20.3188 6.03477C20.33 6.01305 20.3412 5.99121 20.3525 5.96928C19.8729 6.07342 19.3293 6.12801 18.7595 6.06643C18.579 6.04692 18.4118 5.96264 18.2887 5.8292C17.7858 5.28386 17.1162 4.92085 16.3848 4.79711C16.0602 4.74221 15.6679 4.75478 15.2748 4.82211C14.8477 4.89527 14.476 5.02329 14.2473 5.14546C13.593 5.49503 13.0733 6.05188 12.7696 6.72866C12.4659 7.40545 12.3954 8.16389 12.5692 8.88505C12.6246 9.11496 12.5683 9.35754 12.4174 9.53957C12.2664 9.7216 12.0384 9.82176 11.8022 9.80981C10.9588 9.76715 10.1243 9.6385 9.31142 9.42723C8.45152 9.20374 7.61579 8.8878 6.81921 8.48338C5.64643 7.88797 4.57838 7.11088 3.65354 6.18319C3.61135 6.3988 3.58993 6.61883 3.59008 6.84027L3.59007 6.84219C3.58903 7.39291 3.72418 7.93534 3.98349 8.42119C4.2428 8.90704 4.61822 9.32123 5.07633 9.62689C5.35436 9.81239 5.47608 10.1595 5.37483 10.478C5.27358 10.7965 4.97378 11.0096 4.63968 11.0005C4.33708 10.9923 4.03702 10.9555 3.74335 10.8911Z"
        fill="#121212"
      />
    </svg>
  );
};

export default TwitterIcon;
