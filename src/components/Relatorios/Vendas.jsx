/* eslint-disable no-undef */
import style from './Vendas.module.css'
import Nav from "../NavBarADM/NavBarADM"
import Footer from "../Footer/Footer"
import React, { useState } from 'react';
import { BarChart, Bar, Rectangle, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

function Vendas() {
    const data = [
        {
          name: 'Page A',
        //   uv: 4000,
          Masculino: 2400,
        //   amt: 2400,
        },
        {
          name: 'Page B',
        //   uv: 3000,
          PlusSize: 1398,
        //   amt: 2210,
        },
        {
          name: 'Page C',
        //   uv: 2000,
          Vintage: 9800,
        //   amt: 2290,
        },
        {
          name: 'Page D',
        //   uv: 2780,
          Casual: 3908,
        //   amt: 2000,
        },
        {
          name: 'Page E',
        //   uv: 1890,
          Infantil: 4800,
        //   amt: 2181,
        },
        {
          name: 'Page F',
        //   uv: 2390,
          Feminino: 3800,
        //   amt: 2500,
        },
        {
          name: 'Page G',
        //   uv: 3490,
          Esportivo: 4300,
        //   amt: 2100,
        },
        {
          name: 'Page H',
            // uv: 3490,
            Sensual: 4300,
            // amt: 2100,
          },
          {
            name: 'Page I',
            // uv: 3490,
            Jeans: 4300,
            // amt: 2100,
          },
      ];

      const data2 = [
        {
          name: 'Page J',
        //   uv: 4000,
          Blusas: 2500,
        //   amt: 2400,
        },
        {
          name: 'Page K',
        //   uv: 3000,
          Calça: 1408,
        //   amt: 2210,
        },
        {
          name: 'Page L',
        //   uv: 2000,
          Vestido: 9830,
        //   amt: 2290,
        },
        {
          name: 'Page M',
        //   uv: 2780,
          Sandália: 3918,
        //   amt: 2000,
        },
        {
          name: 'Page N',
        //   uv: 1890,
          Short: 4810,
        //   amt: 2181,
        },
        {
          name: 'Page O',
        //   uv: 2390,
          Tẽnis: 3700,
        //   amt: 2500,
        },
        {
          name: 'Page P',
        //   uv: 3490,
          Regata: 4320,
        //   amt: 2100,
        },
        {
          name: 'Page Q',
            // uv: 3490,
            Meia: 4300,
            // amt: 2100,
          },
          {
            name: 'Page R',
            // uv: 3490,
            Lingerie: 4300,
            // amt: 2100,
          },
      ];
      
  return (
    <>
    <Nav/>
    <div className={style.Topo}>
        <button>Vendas</button>
        <button>Usuários</button>
    </div>
    <ResponsiveContainer className={style.Grafico1} width="100%" height={700}>
        <div className={style.Espaço}></div>
        <h1>Categoria</h1>
     <BarChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 60,
            right: 30,
            left: 20,
            bottom: 170,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="Masculino" fill="#8884d8"></Bar>
            <Bar dataKey="PlusSize" fill="#438282"></Bar>
            <Bar dataKey="Vintage" fill="#D2A3A3"></Bar>
            <Bar dataKey="Casual" fill="#DBB4B4"></Bar>
            <Bar dataKey="Infantil" fill="#A3D2B0"></Bar>
            <Bar dataKey="Feminino" fill="#D2C8A3"></Bar>
            <Bar dataKey="Esportivo" fill="#CCA3D2"></Bar>
            <Bar dataKey="Sensual" fill="#A3B6D2"></Bar>
            <Bar dataKey="Jeans" fill="#7d9fa6"></Bar>
        </BarChart>
    </ResponsiveContainer>

    <ResponsiveContainer className={style.Grafico1} width="100%" height={700}>
        <div className={style.Espaço}></div>
        <h1>Produtos</h1>
     <BarChart
          width={500}
          height={400}
          data={data2}
          margin={{
            top: 60,
            right: 30,
            left: 20,
            bottom: 170,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
            <Bar dataKey="Blusas" fill="#8884d8"></Bar>
            <Bar dataKey="Calça" fill="#438282"></Bar>
            <Bar dataKey="Vestido" fill="#D2A3A3"></Bar>
            <Bar dataKey="Sandália" fill="#DBB4B4"></Bar>
            <Bar dataKey="Short" fill="#A3D2B0"></Bar>
            <Bar dataKey="Tẽnis" fill="#D2C8A3"></Bar>
            <Bar dataKey="Regata" fill="#CCA3D2"></Bar>
            <Bar dataKey="Meia" fill="#A3B6D2"></Bar>
            <Bar dataKey="Lingerie" fill="#7d9fa6"></Bar>
        </BarChart>
    </ResponsiveContainer>

          <Footer/>
    </>
  );
};

export default Vendas;