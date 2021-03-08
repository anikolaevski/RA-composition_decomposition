import React from 'react';

import Container from './components/Container';
import TopTab1 from './components/TopTab1';
import CurrencyRatesBlock from './components/CurrencyRatesBlock';
import NewsLine from './components/NewsLine';
import SearchBlock from './components/SearchBlock';
import TVProgramBlock from './components/TVProgramBlock';
import TopVisitsBlock from './components/TopVisitsBlock';
import TVLiveBlock from './components/TVLiveBlock';

import {MainTab, NewsItems, CurrencyRates, SecondTab, asideBanner, genBannerUrl, 
  currentWeather, TopVisits, TVPrograms, LocalGeo, TVLive} from './Content';
import {media} from './Dicts';

/**
 * Подготовка данных, рендер компонентов
 */
export function General () {
  // Подготовка данных
  const curDate = new Date();
  const datestr = `${curDate.toLocaleDateString()} ${curDate.toLocaleTimeString()}`;
  NewsItems.forEach( o => {
    const med = media.find( x => x.name === o.name);
    if (med) {
      o.mediaTitle = med.title;
      o.icon = med.icon;
    } else {
      o.mediaTitle = "unknown";
      o.icon = "";
    }
  });
  // console.log(NewsItems);
  return (
    <React.Fragment>
      <div className="General">
        {/* <Container class="FirstClass">Страница в разработке</Container> */}
        {/* Верхнее меню */}
        <TopTab1 class="TopTab1" content={MainTab}><p className="SmallGrey">{datestr}</p></TopTab1>
        <Container class="newsLineContainer">
          {/* Новостная лента */}
          <Container class="newsLineMain">
            <NewsLine content={NewsItems}/>
            <CurrencyRatesBlock CurrencyRates={CurrencyRates}>
              <span className="Currency-trend">...</span>
            </CurrencyRatesBlock>
          </Container>
          {/* Боковой баннер */}
          <Container class="newsLineAside">
            <Container class="newsLineAsideImg" typ="img" href={asideBanner} alt="unknown"/>
            <Container class="SelectedBlue" typ="a" href="#">Работа над ошибками</Container>
            <p>Смотрите на Яндексе и запоминайте</p>
          </Container>
        </Container>
        {/* Второе меню */}
        <TopTab1 class="TopTab2" content={SecondTab}></TopTab1>
      </div>
      {/* Блок поиска */}
      <div className="General2">
        <SearchBlock/>
      </div>
      {/* Слоган под блоком поиска*/}
      <div className="General">
        < Container class="CurrencyRatesBlock">
            <span className="Currency-rate-micro">Найдётся всё. Например,</span>
            <span className="Currency-trend-micro">фазы луны сегодня</span>
          </Container>
      </div>
      {/* Основной баннер */}
      <div className="General">
        <Container class="gen-banner" typ="img" href={genBannerUrl} alt="баннер"/>
      </div>
      <div className="General">
      {/* Колонки подвала */}
        <Container class="Basement-columns">
          {/* 1-z колонка */}
          <Container class="Basement-column">
            <Container class="Basement-column-header">Погода</Container>
              <Container class="weather Basement-column-block">
                <Container class="weather-icon" typ="img" href={currentWeather.icon}/>
                <Container class="weather-giant-text">{currentWeather.current}</Container>
                <Container class="weather-light-text">{currentWeather.full}</Container>
              </Container>
            <Container class="Basement-column-header">Посещаемое</Container>
            <Container class="Basement-column-block">
              {TopVisits.map(
                o => <TopVisitsBlock
                  key = {o.key}
                  topic = {o.topic}
                  desc = {o.desc}
                  href = {o.href}
                  />
              )}
            </Container>
          </Container>
          {/* 2-я колонка */}
          <Container class="Basement-column">
            <Container class="Basement-column-header">Карта Германии</Container>
            <Container class="Basement-column-block">
              {LocalGeo.map(
                o => <TopVisitsBlock
                  key = {o.key}
                  topic = {o.topic}
                  desc = {o.desc}
                  href = {o.href}
                  />
              )}
            </Container>
            <Container class="Basement-column-header">Телепрограмма</Container>
            <Container class="Basement-column-block">
              {TVPrograms.map(
                o => <TVProgramBlock
                  key = {o.key}
                  topic = {o.topic}
                  desc = {o.desc}
                  href = {o.href}
                  />
              )}
            </Container>
          </Container>
          {/* 3-я колонка */}
          <Container class="Basement-column">
            <Container class="Basement-column-header">Эфир</Container>
            <Container class="Basement-column-block">
              {TVLive.map(
                o => <TVLiveBlock
                  key = {o.key}
                  program = {o.program}
                  tag = {o.tag}
                  href = {o.href}
                  />
              )}
            </Container>
          </Container>
        </Container>
      </div>
    </React.Fragment>
  );
}
