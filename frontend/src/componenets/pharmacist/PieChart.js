import { ResponsivePie } from '@nivo/pie';
import { useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';

export const PieChart = () => {
  // @ DESCRIPTION            =>  Initial States
  const [penadol, setPenadol] = useState(0);
  const [piriton, setPiriton] = useState(0);
  const [amoxaline, setAmoxaline] = useState(0);
  const [erox, setErox] = useState(0);

  const user = JSON.parse(localStorage.getItem('user'));

  // @ DESCRIPTION            =>  Get medicine Count Medicine name PharmacyId

  useEffect(() => {
    const fetchCount = async () => {
      //1. For penadol
      const res = await axios.post(
        'http://localhost:4000/api/medDailyCount/getDailyMedicineCountByPharmacy',
        {
          medicineName: 'Panadol',
          pharmacyId: user.id,
        }
      );
      console.log(res);
      if (res.data.status === 'success') {
        setPenadol(res.data.data.dailyMedCount);
      }

      //2. For piriton
      const res_piriton = await axios.post(
        'http://localhost:4000/api/medDailyCount/getDailyMedicineCountByPharmacy',
        {
          medicineName: 'piriton',
          pharmacyId: user.id,
        }
      );
      console.log(res);
      if (res_piriton.data.status === 'success') {
        setPiriton(res_piriton.data.data.dailyMedCount);
      }

      //3. For amoxaline
      const res_amoxaline = await axios.post(
        'http://localhost:4000/api/medDailyCount/getDailyMedicineCountByPharmacy',
        {
          medicineName: 'amoxaline',
          pharmacyId: user.id,
        }
      );
      console.log(res);
      if (res_amoxaline.data.status === 'success') {
        setAmoxaline(res_amoxaline.data.data.dailyMedCount);
      }

      //4. For erox
      const res_erox = await axios.post(
        'http://localhost:4000/api/medDailyCount/getDailyMedicineCountByPharmacy',
        {
          medicineName: 'erox',
          pharmacyId: user.id,
        }
      );
      console.log(res);
      if (res_erox.data.status === 'success') {
        setErox(res_erox.data.data.dailyMedCount);
      }
    };
    fetchCount();
  }, []);

  const data = [
    {
      id: 'Penadol',
      label: 'Penadol',
      value: penadol,
      color: '03045e',
    },

    {
      id: 'Piriton',
      label: 'Piriton',
      value: piriton,
      color: 'hsl(162, 70%, 50%)',
    },
    {
      id: 'Amoxaline',
      label: 'Amoxaline',
      value: amoxaline,
      color: 'hsl(291, 70%, 50%)',
    },
    {
      id: 'Erox',
      label: 'Erox',
      value: erox,
      color: 'hsl(229, 70%, 50%)',
    },
  ];

  const theme = useTheme();

  return (
    <ResponsivePie
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: theme.palette.primary.main,
            },
          },
          legend: {
            text: {
              fill: theme.palette.primary.main,
            },
          },
          ticks: {
            line: {
              stroke: theme.palette.primary.main,
              strokeWidth: 1,
            },
            text: {
              fill: theme.palette.primary.main,
            },
          },
        },
        legends: {
          text: {
            fill: theme.palette.primary.main,
          },
        },
      }}
      margin={{ top: 40, right: 80, bottom: 80, left: 80 }}
      innerRadius={0.5}
      padAngle={0.7}
      cornerRadius={3}
      activeOuterRadiusOffset={8}
      borderColor={{
        from: 'color',
        modifiers: [['darker', 0.2]],
      }}
      arcLinkLabelsSkipAngle={10}
      arcLinkLabelsTextColor={theme.palette.primary.main}
      arcLinkLabelsThickness={2}
      arcLinkLabelsColor={{ from: 'color' }}
      enableArcLabels={false}
      arcLabelsRadiusOffset={0.4}
      arcLabelsSkipAngle={7}
      arcLabelsTextColor={{
        from: 'color',
        modifiers: [['darker', 2]],
      }}
      defs={[
        {
          id: 'dots',
          type: 'patternDots',
          background: 'inherit',
          color: theme.palette.primary.main,
          size: 4,
          padding: 1,
          stagger: true,
        },
        {
          id: 'lines',
          type: 'patternLines',
          background: 'inherit',
          color: theme.palette.primary.main,
          rotation: -45,
          lineWidth: 6,
          spacing: 10,
        },
      ]}
      legends={[
        {
          anchor: 'bottom',
          direction: 'row',
          justify: false,
          translateX: 0,
          translateY: 56,
          itemsSpacing: 0,
          itemWidth: 100,
          itemHeight: 18,
          itemTextColor: theme.palette.primary.main,
          itemDirection: 'left-to-right',
          itemOpacity: 1,
          symbolSize: 18,
          symbolShape: 'circle',
          effects: [
            {
              on: 'hover',
              style: {
                itemTextColor: '#000',
              },
            },
          ],
        },
      ]}
    />
  );
};
