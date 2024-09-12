import { Pie } from '@ant-design/plots';

function PieTemplate() {
    const data = [
        { type: 'Lunes', value: 27 },
        { type: 'Martes', value: 25 },
        { type: 'Miercoles', value: 18 },
        { type: 'Jueves', value: 15 },
        { type: 'Viernes', value: 10 },
        { type: 'Sabado', value: 5 },
      ];

      const config = {
        data,
        angleField: 'value',
        colorField: 'type',
        radius: 0.8,
        label: {
          text: (d) => `${d.type}\n ${d.value}`,
          position: 'spider',
        },
        legend: {
          color: {
            title: false,
            position: 'right',
            rowPadding: 5,
          },
        },
      };
    return (
        <div>
            <Pie {...config} />
        </div>
    );
}

export default PieTemplate;

