"use client";

import React from "react";
import { motion } from "framer-motion";
import Typography from "../Typography";

const CarFrontIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="122" height="101" viewBox="0 0 122 101" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M36.7094 87.9019C36.7094 93.8214 31.9109 98.6203 25.9913 98.6203C20.0722 98.6203 15.2734 93.8214 15.2734 87.9019C15.2734 81.9823 20.0722 77.1834 25.9913 77.1834C31.9109 77.1834 36.7094 81.9823 36.7094 87.9019Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M106.733 87.9019C106.733 93.8214 101.934 98.6203 96.0147 98.6203C90.0956 98.6203 85.2969 93.8214 85.2969 87.9019C85.2969 81.9823 90.0956 77.1834 96.0147 77.1834C101.934 77.1834 106.733 81.9823 106.733 87.9019Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M36.707 87.8951H85.2933" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M15.2723 87.9079L7.44031 87.1969C4.2561 86.9471 1.65832 84.4102 1.50715 81.2194C1.50247 81.1178 1.5 81.0157 1.5 80.9131V65.0337C1.5 61.1927 4.36016 57.9526 8.17125 57.4764C11.4864 57.0621 14.7012 56.0603 17.6649 54.5182L33.7483 46.1505C37.9154 44.0669 42.5105 42.982 47.1694 42.982H56.2399C60.6752 42.982 65.033 44.0405 68.9573 46.0531C70.1834 46.682 71.3361 47.4445 72.4207 48.2946L87.9348 60.4541C87.9348 60.4541 103.355 60.4541 115.478 66.0838C118.48 67.4782 120.365 70.5244 120.365 73.8347V82.7988C120.365 85.6203 118.078 87.9077 115.256 87.9077H106.731" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M87.9328 60.4505H31.1869C28.3442 60.4505 25.618 59.3212 23.6079 57.3111L20.3164 54.0197" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M57.168 73.7806H64.694" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M118.052 18.1419C108.162 18.1419 101.411 24.8951 101.411 34.7854C101.411 24.8951 94.6595 18.1419 84.7695 18.1419C94.6595 18.1419 101.411 11.3903 101.411 1.5C101.411 11.3903 108.162 18.1419 118.052 18.1419Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M34.7828 18.1419C24.8928 18.1419 18.1414 24.8951 18.1414 34.7854C18.1414 24.8951 11.39 18.1419 1.5 18.1419C11.39 18.1419 18.1414 11.3903 18.1414 1.5C18.1414 11.3903 24.8928 18.1419 34.7828 18.1419Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
    <ellipse cx="114.422" cy="46.504" rx="3.69913" ry="3.69925" fill="currentColor"/>
    <ellipse cx="42.3827" cy="4.32022" rx="3.69913" ry="3.69925" fill="currentColor"/>
  </svg>
);

const WrenchIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M89.4121 22.889C89.3444 22.1057 87.596 20.6013 86.8561 20.333C86.1143 20.063 85.284 20.2467 84.7259 20.8018L73.5323 31.9954L58.993 17.4561L70.4106 6.08148C70.9694 5.52537 71.1517 4.69799 70.8825 3.9603C70.6106 3.22114 68.8179 1.65523 68.03 1.58737C61.0959 0.992192 54.3018 3.45856 49.3897 8.35295C42.662 15.0558 40.8804 24.8439 44.0353 33.187C43.6905 33.4764 43.3502 33.7831 43.0146 34.1138L4.9028 69.9411C4.88936 69.9541 4.87611 69.9684 4.86156 69.9812C0.379479 74.4466 0.379479 81.7122 4.86156 86.1783C9.34439 90.6433 16.584 90.589 21.0654 86.1236C21.0847 86.1057 21.1024 86.0877 21.1201 86.0677L56.7691 47.8038C57.094 47.4786 57.3958 47.1383 57.6802 46.7891C66.0571 49.9378 75.8884 48.1671 82.6219 41.4598C87.533 36.5651 90.0103 29.796 89.4121 22.889Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
  </svg>
);

const QualityIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="91" height="91" viewBox="0 0 91 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.4171 5.0389C42.1631 0.32037 48.8369 0.320364 50.5829 5.0389L59.2734 28.5245C59.8223 30.008 60.992 31.1777 62.4755 31.7266L85.9611 40.4171C90.6796 42.1631 90.6796 48.8369 85.9611 50.5829L62.4755 59.2734C60.992 59.8223 59.8223 60.992 59.2734 62.4755L50.5829 85.9611C48.8369 90.6796 42.1631 90.6796 40.4171 85.9611L31.7266 62.4755C31.1777 60.992 30.008 59.8223 28.5245 59.2734L5.0389 50.5829C0.32037 48.8369 0.320364 42.1631 5.0389 40.4171L28.5245 31.7266C30.008 31.1777 31.1777 30.008 31.7266 28.5245L40.4171 5.0389Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round"/>
  </svg>
);

const TrustedServiceIcon = ({ className }: { className?: string }) => (
  <svg className={className} width="104" height="91" viewBox="0 0 104 91" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M53.3054 16.5414L45.7817 9.05747C35.6517 -1.01916 19.2276 -1.01916 9.09747 9.05747C-1.03249 19.1343 -1.03249 35.4719 9.09747 45.5485L11.8635 48.3M81.5615 57.3696L95.2772 44.4673C104.908 34.8877 104.908 19.3561 95.2772 9.77648C85.6469 0.196827 70.0331 0.196827 60.4028 9.77648L40.979 28.5487C37.7092 31.696 37.6662 36.8977 40.8836 40.0979V40.0982C44.0637 43.2615 49.2199 43.2615 52.4 40.0982L55.8772 36.6393C57.2148 35.3087 59.3839 35.3087 60.7215 36.6393L82.3087 58.1129C84.9227 60.7132 84.9227 64.9288 82.3087 67.5291C79.695 70.1293 75.457 70.1293 72.843 67.5291M56.4712 71.4645L62.33 77.2925C65.1369 80.0846 69.6875 80.0846 72.4943 77.2925C75.301 74.5006 75.301 69.9738 72.4943 67.1817L66.6045 61.3228M43.6896 78.9758L52.1643 87.4061C54.9712 90.198 59.5218 90.198 62.3286 87.4061C65.1355 84.614 65.1355 80.0871 62.3286 77.295M29.616 82.476L29.7088 82.5682C32.5658 85.4104 37.1982 85.4104 40.0552 82.5682L43.7988 78.8445C46.656 76.0023 46.656 71.3944 43.7988 68.5524L43.7061 68.4602C40.8489 65.6181 36.2168 65.6181 33.3596 68.4602L29.616 72.1839C26.759 75.0261 26.759 79.6341 29.616 82.476ZM19.0157 72.2512L19.1084 72.3434C21.9656 75.1855 26.5977 75.1855 29.4547 72.3434L38.8943 62.9539C41.7513 60.1118 41.7513 55.5038 38.8943 52.6618L38.8014 52.5697C35.9444 49.7275 31.3121 49.7275 28.4551 52.5697L19.0157 61.9591C16.1587 64.8013 16.1587 69.4092 19.0157 72.2512ZM8.57824 61.8665L8.67091 61.9587C11.5281 64.8009 16.1605 64.8009 19.0174 61.9587L24.7922 56.2144C27.6494 53.3724 27.6494 48.7646 24.7922 45.9225L24.6996 45.8301C21.8424 42.9882 17.2102 42.9882 14.353 45.8301L8.57824 51.5747C5.72126 54.4166 5.72126 59.0246 8.57824 61.8665Z" stroke="currentColor" strokeWidth="3" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const features = [
  {
    icon: <CarFrontIcon className="h-12 w-auto text-white" />,
    label: "25+ Years Legacy",
  },
  {
    icon: <WrenchIcon className="h-12 w-auto text-white" />,
    label: "Skilled Expertise",
  },
  {
    icon: <QualityIcon className="h-12 w-auto text-white" />,
    label: "Quality First",
  },
  {
    icon: <TrustedServiceIcon className="h-12 w-auto text-white" />,
    label: "Trusted Service",
  },
];

export default function                                                                                                                                                                         AboutFeatures() {
  return (
    <section className="py-0 bg-[#1D1D1B] text-white">
      <div className="container mx-auto px-4 lg:px-20 max-w-[1400px]">
        
        {/* Subtle top divider line like in header, or just visual separation */}
        <div className="w-full border-t border-white/10 mb-20"></div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 text-center">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center gap-6  "
            >
              <div className="p-4 rounded-full border border-transparent transition-all duration-300 ">
                {feature.icon}
              </div>
              <Typography variant="smallhead" className="text-gray-300 font-sans tracking-wide">
                {feature.label}
              </Typography>
            </motion.div>
          ))}
        </div>
        
        {/* Subtle bottom divider line */}
        <div className="w-full border-t border-white/10 mt-20"></div>
      </div>
    </section>
  );
}
