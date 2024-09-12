import { useEffect, useState } from 'react';
import { Rose } from '@ant-design/plots';
import { Spin } from 'antd';

function RoseTemplate() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simular una carga de datos
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); // Cambia esto al tiempo que tarda en cargar tus datos

    return () => clearTimeout(timer);
  }, []);

    const config = {
        width: 720,
        height: 720,
        autoFit: false,
        radius: 0.85,
        data: {
          type: 'fetch',
          value: 'https://render.alipay.com/p/yuyan/180020010001215413/antd-charts/rose-rose-label.json',
        },
        xField: 'year',
        yField: 'people',
        colorField: 'year',
        transform: [{ type: 'groupX', y: 'sum' }],
        scale: { y: { type: 'sqrt' }, x: { padding: 0 } },
        axis: false,
        legend: { color: { length: 400, layout: { justifyContent: 'center' } } },
        labels: [
          {
            text: 'people',
            position: 'outside',
            formatter: '~s',
            transform: [{ type: 'overlapDodgeY' }],
          },
        ],
        tooltip: { items: [{ channel: 'y', valueFormatter: '~s' }] },
      };
    return (
        <div>
            {loading ? (
        <Spin tip="Cargando..." style={{marginTop: '24px'}}/>
      ) : (
        <Rose {...config} />
      )}
        </div>
    );
}

export default RoseTemplate;