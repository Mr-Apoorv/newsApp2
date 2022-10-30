import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import PropTypes from "prop-types";

export class News extends Component {
  articles = [
    {
      source: { id: null, name: "Investing.com" },
      author: "Reuters",
      title:
        "Wall Street flat but trading choppy ahead of Fed rate meet By Reuters - Investing.com",
      description: "Wall Street flat but trading choppy ahead of Fed rate meet",
      url: "https://www.investing.com/news/stock-market-news/futures-fall-on-rate-hike-worries-2894688",
      urlToImage:
        "https://i-invdn-com.investing.com/news/SP500StandardandPoors500Index_800x533_L_1657544297.jpg",
      publishedAt: "2022-09-19T18:30:00Z",
      content:
        "By Devik Jain and David French\r\n(Reuters) - Wall Street's main indexes were flat in the early afternoon on Monday amid choppy trading, bouncing around as investors waited to see how aggressive the Fe… [+3035 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        "Gujarat Giants vs Manipal Tigers, Legends League Cricket Highlights: Parthiv Patel, Ashok Dinda Shine In Gujarat Giants' 2-Wicket Win Over Manipal Tigers - NDTV Sports",
      description:
        "Gujarat Giants vs Manipal Tigers, Legends League Cricket Highlights: Gujarat Giants chased down 121-run target against Manipal Tigers with 16 balls to spare.",
      url: "https://sports.ndtv.com/cricket/gujarat-giants-vs-manipal-tigers-legends-league-cricket-2022-live-updates-3357852",
      urlToImage:
        "https://c.ndtvimg.com/2022-09/cufa8c08_parthiv-patel-twitter_625x300_19_September_22.jpg",
      publishedAt: "2022-09-19T18:07:46Z",
      content: null,
    },
    {
      source: { id: "google-news", name: "Google News" },
      author: null,
      title:
        "SA20 auction Live Updates Full list of sold unsold players Live Report Streaming Info SA20 auction latest player list - Sportstar",
      description: null,
      url: "https://news.google.com/__i/rss/rd/articles/CBMiogFodHRwczovL3Nwb3J0c3Rhci50aGVoaW5kdS5jb20vY3JpY2tldC9zYTIwLWF1Y3Rpb24tbGl2ZS11cGRhdGVzLWxpdmUtc3RyZWFtaW5nLWluZm8tcGxheWVycy1saXN0LXRlYW1zLXNvdXRoLWFmcmljYS10MjAtbGVhZ3VlLXBsYXllci1hdWN0aW9uL2FydGljbGU2NTkwOTYyMi5lY2XSAQA?oc=5",
      urlToImage: null,
      publishedAt: "2022-09-19T18:01:30Z",
      content: null,
    },
    {
      source: { id: null, name: "YouTube" },
      author: null,
      title:
        "iPhone 14 & 14 Pro: How To Force Restart, Enter Recovery Mode & DFU Mode! - 9to5Mac",
      description: null,
      url: "https://www.youtube.com/supported_browsers?next_url=https:%2F%2Fwww.youtube.com%2Fwatch%3Fv%3DzwrDjrKdS8E",
      urlToImage: null,
      publishedAt: "2022-09-19T18:00:32Z",
      content:
        "Your browser isnt supported anymore. Update it to get the best YouTube experience and our latest features. Learn more\r\nRemind me later",
    },
    {
      source: { id: null, name: "DNA India" },
      author: "DNA Web Team",
      title:
        "NASA's James Webb Space Telescope captures its first photos of Mars - DNA India",
      description:
        "NASA's blog says the Mars team will use these imagery and spectroscopic data to examine regional differences and hunt for trace gases.",
      url: "https://www.dnaindia.com/science/report-nasa-s-james-webb-space-telescope-captures-its-first-photos-of-mars-2986488",
      urlToImage:
        "https://cdn.dnaindia.com/sites/default/files/styles/half/public/2022/09/19/2539997-queen-elizabeth-11.jpg",
      publishedAt: "2022-09-19T17:49:00Z",
      content:
        "NASA`s James Webb Space Telescope, which was launched in December 2021 and is working successfully, has recently captured its first images of our neighbouring planet, Mars.\r\nAlso, READ: Space Tourism… [+2774 chars]",
    },
    {
      source: { id: null, name: "The Tribune India" },
      author: "The Tribune India",
      title:
        "Capt Amarinder Singh joins BJP, merges his Punjab Lok Congress with saffron party - The Tribune India",
      description:
        "Former Punjab Chief Minister Capt Amarinder Singh on Monday merged his nascent party, the Punjab Lok Congress, with the BJP in presence of Union ministers Narendra Singh Tomar and Kiren Rijiju.",
      url: "https://www.tribuneindia.com/news/punjab/capt-amarinder-singh-joins-bjp-433305",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/9/2022_9$largeimg_78165487.jpeg",
      publishedAt: "2022-09-19T17:45:00Z",
      content:
        "Tribune News Service\r\nVibha Sharma\r\nNew Delhi, September 19\r\nFormer Punjab Chief Minister Capt Amarinder Singh on Monday merged his nascent party, the Punjab Lok Congress, with the BJP in presence of… [+4812 chars]",
    },
    {
      source: { id: null, name: "Moneycontrol" },
      author: "Sunil Shankar Matkar",
      title:
        "Trade setup for Tuesday: Top 15 things to know before the opening bell - Moneycontrol",
      description:
        "Based on the open interest future percentage, there were 57 stocks including India Cements, Nifty Financial, Astral, Lupin, and Bajaj Auto in which a short-covering was seen",
      url: "https://www.moneycontrol.com/news/business/markets/trade-setup-for-tuesday-top-15-things-to-know-before-the-opening-bell-7-9201501.html",
      urlToImage:
        "https://images.moneycontrol.com/static-mcnews/2022/06/Stocks-770x433.jpg",
      publishedAt: "2022-09-19T16:32:26Z",
      content:
        "The market rebounded with half a percent gains on September 19, after losing 3 percent in the previous three trading sessions, as traders await the Federal Reserve's interest rate decision which is d… [+9539 chars]",
    },
    {
      source: { id: null, name: "Livemint" },
      author: "Livemint",
      title:
        "These lifestyle habits trigger cancer, death risk in type 2 diabetes patients: What study says | Mint - Mint",
      description:
        "The researchers have said that smoking and physical activity may be the two most important risk factors for mortality in people with type 2 diabetes",
      url: "https://www.livemint.com/news/world/these-lifestyle-habits-trigger-cancer-death-risk-in-type-2-diabetes-patients-what-study-says-11663601156304.html",
      urlToImage:
        "https://images.livemint.com/img/2022/09/19/600x338/diabetes_1663602674346_1663602674498_1663602674498.jpg",
      publishedAt: "2022-09-19T16:18:31Z",
      content:
        "A new study has revealed the number of lifestyle habits that could potentially put type 2 diabetic patients on a course to death. According to a new study, people with type 2 diabetes who get cancer … [+3616 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV News Desk",
      title:
        "Queen Elizabeth II Funeral LIVE Updates: Queen Elizabeth's Coffin Lowered Into Royal Vault At Windsor - NDTV",
      description:
        "Queen Elizabeth: Queen Elizabeth II's coffin was today lowered into the Royal Vault at the St George's Chapel in Windsor Castle after a day of matchless pagaentry that drew world leaders and thousands of well-wishers.",
      url: "https://www.ndtv.com/world-news/queen-elizabeth-funeral-queen-death-british-queen-updates-uk-queen-funeral-september-19-3356501",
      urlToImage:
        "https://c.ndtvimg.com/2022-09/34h9ktcg_queen-elizabeth-funeral-afp_625x300_19_September_22.jpg",
      publishedAt: "2022-09-19T15:53:39Z",
      content:
        "Queen Elizabeth: 'Part of history', Crowds jam London for queen's funeralHuge crowds packed central London on Monday to watch the state funeral of Queen Elizabeth II as people from across the United … [+538 chars]",
    },
    {
      source: { id: null, name: "The Tribune India" },
      author: "The Tribune India",
      title:
        "Keto Flow Gummies REVIEWS [Are Keto Gummies Safe] Price Scam or Legit & Benefits! - The Tribune India",
      description:
        "Regardless of age or gender, people in the present world are all hell-bent on maintaining a trim figure, getting a six-pack, and losing weight. So, they begin various diet plans, consume a lot of vitamins, reduce their calorie intake, and engage in intense ex…",
      url: "https://www.tribuneindia.com/news/brand-connect/keto-flow-gummies-reviews-are-keto-gummies-safe-price-scam-or-legit-benefits-433327",
      urlToImage:
        "https://englishtribuneimages.blob.core.windows.net/gallary-content/2022/9/2022_9$largeimg_1621971127.png",
      publishedAt: "2022-09-19T15:53:00Z",
      content:
        "The Tribune, now published from Chandigarh, started publication on February 2, 1881, in Lahore (now in Pakistan). It was started by Sardar Dyal Singh Majithia, a public-spirited philanthropist, and i… [+505 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        "Shashi Tharoor vs Ashok Gehlot In Race For Congress President: 10 Points - NDTV",
      description:
        "The Congress is set to have a non-Gandhi president for the first time in over 20 years. Ashok Gehlot, a Gandhi family loyalist, will run for party president opposite Shashi Tharoor, who is among those in the party who want major internal reforms.",
      url: "https://www.ndtv.com/india-news/shashi-tharoor-gets-go-ahead-from-sonia-gandhi-to-run-for-congress-president-sources-3358594",
      urlToImage:
        "https://c.ndtvimg.com/2022-09/g2mqt3r_shashi-tharoor-ashok-gehlot_650x400_19_September_22.jpg",
      publishedAt: "2022-09-19T15:46:00Z",
      content:
        "<li>Shashi Tharoor, a former Union Minister, was the first to declare his intention to run for a post that has been with the Gandhis -- either Sonia Gandhi or her son Rahul -- for much of 25 years. H… [+2585 chars]",
    },
    {
      source: { id: null, name: "NDTV News" },
      author: null,
      title:
        'Gauri Khan To NDTV On Koffee With Karan 7 Appearance: "Like Having Coffee At Home" - NDTV',
      description: "Gauri Khan will appear on Koffee With Karan after 18 years",
      url: "https://www.ndtv.com/entertainment/gauri-khan-to-ndtv-on-koffee-with-karan-7-appearance-like-having-coffee-at-home-3358715",
      urlToImage:
        "https://c.ndtvimg.com/2022-09/t95ubef_-gauri-khan-_625x300_19_September_22.jpg",
      publishedAt: "2022-09-19T14:52:38Z",
      content:
        "Gauri Khan with friends on KWK sets. (courtesy: gaurikhan)\r\nNew Delhi: On the heels of the release of the second season of Netflix reality show Fabulous Lives of Bollywood Wives, Gauri Khan is all se… [+1561 chars]",
    },
    {
      source: { id: null, name: "ThePrint" },
      author: "Abhishek Dey",
      title:
        "‘Drunk’ Mann deplaned at Frankfurt, says opposition. Punjab CM meets Kejriwal, AAP denies claims - ThePrint",
      description:
        "Row over last-minute rescheduling of CM's flight from Frankfurt as opposition cites news reports to claim he was 'too drunk to walk', demands inquiry. AAP says such comments 'unethical.",
      url: "https://theprint.in/politics/drunk-mann-deplaned-at-frankfurt-says-opposition-punjab-cm-meets-kejriwal-aap-denies-claims/1134758/",
      urlToImage:
        "https://static.theprint.in/wp-content/uploads/2022/09/Bhagwant-Mann.jpg",
      publishedAt: "2022-09-19T14:48:53Z",
      content:
        "New Delhi: Punjab Chief Minister Bhagwant Mann met Aam Aadmi Party (AAP) national convener Arvind Kejriwal after he arrived Monday from Germany amid a political row triggered by his last-minute resch… [+5240 chars]",
    },
    {
      source: { id: null, name: "WION" },
      author: "Sidhant Sibal",
      title:
        "Emirates Mars Mission`s `Science Lead` calls ISRO an `important voice among world’s younger space nations` - WION",
      description:
        "The Emirates Mars Mission was launched by United Arab Emirates Space Agency in 2020 for the exploration of the red planet.",
      url: "https://www.wionews.com/india-news/emirates-mars-missions-science-lead-calls-isro-an-important-voice-among-worlds-younger-space-nations-517790",
      urlToImage:
        "https://cdn.wionews.com/sites/default/files/styles/story_page/public/2022/09/19/297116-chief.png",
      publishedAt: "2022-09-19T14:44:51Z",
      content:
        'Emirates Mars Mission "Science Lead" Hessa Al Matroushi has called ISRO an "important voice among the worlds younger space nations".\r\nThe Emirates Mars Mission was launched by United Arab Emirates Sp… [+5156 chars]',
    },
    {
      source: { id: null, name: "NDTV News" },
      author: "NDTV Sports Desk",
      title:
        'Gautam Gambhir Opens Up On Surrogate Advertising, Says "If BCCI President Is Doing It, You Cant Expe.. - NDTV Sports',
      description:
        "Gambhir also said that most of the sponsorship money in the IPL these days is coming from fantasy gaming platforms and it will take a collective will from the board to stop the menace of surrogate advertising.",
      url: "https://sports.ndtv.com/cricket/gautam-gambhir-opens-up-on-surrogate-advertising-says-if-bcci-president-is-doing-it-you-cant-expect-other-players-not-to-do-it-3358420",
      urlToImage:
        "https://c.ndtvimg.com/2021-11/g8et0k6_gautam-gambhir-instagram_625x300_23_November_21.jpg?im=FeatureCrop,algorithm=dnn,width=1200,height=675",
      publishedAt: "2022-09-19T13:48:38Z",
      content:
        "Former India opening batter and BJP MP Gautam Gambhir has spoken out against surrogate advertising in Indian cricket. Speaking at an event with The Indian Express, Gambhir said that if BCCI president… [+995 chars]",
    },
    {
      source: { id: null, name: "India TV News" },
      author: "Edited by Saumya Nigam",
      title:
        "OnePlus Nord to foray in the wearable market, set to launch a new smartwatch in India - India TV News",
      description:
        "'The Nord Watch will bolster OnePlus Nord's hold within the wearables segment and aims to make the signature technology accessible to a wider set of audience,' the company said in a statement.",
      url: "https://www.indiatvnews.com/technology/news/oneplus-nord-to-foray-in-the-wearable-market-set-to-launch-a-new-smartwatch-in-india-2022-09-19-809652",
      urlToImage:
        "https://resize.indiatvnews.com/en/resize/newbucket/715_-/2022/09/smartwatch-pixabay-1663594523.jpg",
      publishedAt: "2022-09-19T13:37:01Z",
      content:
        "OnePlus Nord has announced to foray into the smartwatch segment and will soon be launching its first wearable in the Indian market.\r\nAs per the reports, the Nord smartwatch is expected to launch in I… [+1071 chars]",
    },
    {
      source: { id: "techcrunch", name: "TechCrunch" },
      author: "Darrell Etherington",
      title: "Rockstar Games confirms GTA 6 footage leak - TechCrunch",
      description:
        "Rockstar Games confirmed that early development footage of Grand Theft Auto 6 leaked over the weekend, due to a 'network intrusion.'",
      url: "https://techcrunch.com/2022/09/19/rockstar-games-confirms-gta-6-footage-leak/",
      urlToImage:
        "https://techcrunch.com/wp-content/uploads/2022/09/07edb091bb329145ee3f3f01476adb40acc6457b.jpg?resize=1200,675",
      publishedAt: "2022-09-19T13:27:38Z",
      content:
        "Rockstar Games has confirmed that it recently “suffered a network intrusion” that resulted in the massive leak of 90 videos of early development versions of Grand Theft Auto 6. The company said in an… [+907 chars]",
    },
    {
      source: { id: null, name: "Zoom" },
      author: "TN Science Desk",
      title:
        "The Rhynchocephalians: Prehistoric reptile fossils discovered that are similar to modern day lizards! - Times Now",
      description:
        "Rhynchocephalians are a unique group of creatures that evolved from lizards during the Triassic Period.",
      url: "https://www.timesnownews.com/technology-science/the-rhynchocephalians-prehistoric-reptile-fossils-discovered-that-are-similar-to-modern-day-lizards-article-94306186",
      urlToImage:
        "https://static.tnn.in/thumb/msid-94306186,imgsize-100,width-1280,height-720,resizemode-75/94306186.jpg",
      publishedAt: "2022-09-19T12:56:09Z",
      content:
        "Legends League Cricket 2022: Full schedule, squads, match timings, streaming details - all you need to know",
    },
    {
      source: { id: null, name: "Hindustan Times" },
      author: "Shubhangi Gupta",
      title:
        "'Not Modi but...': Mamata on who is 'misusing' central agencies for 'interests' - Hindustan Times",
      description:
        "Mamata Banerjee made the comments while speaking on a resolution by the Bengal government against the 'excesses' of central investigative agencies. | Kolkata News",
      url: "https://www.hindustantimes.com/cities/kolkata-news/not-modi-but-mamata-on-who-is-misusing-central-agencies-for-interests-101663591716972.html",
      urlToImage:
        "https://images.hindustantimes.com/img/2022/09/19/1600x900/0a84de06-3437-11ed-ae53-04438ab0d081_1663165004161_1663591925814_1663591925814.jpg",
      publishedAt: "2022-09-19T12:54:07Z",
      content:
        "Bengal chief minister Mamata Banerjee on Monday said she does not believe prime minister Narendra Modi is 'misusing' central investigative agencies to harass and intimidate rivals - a claim made freq… [+2073 chars]",
    },
    {
      source: { id: null, name: "The Indian Express" },
      author: "AP",
      title:
        "United Arab Emirates to launch first lunar rover in November - The Indian Express",
      description:
        "The United Arab Emirates plans to launch its first lunar rover in November this year.",
      url: "https://indianexpress.com/article/technology/science/united-arab-emirates-to-launch-first-lunar-rover-in-november-8160425/",
      urlToImage:
        "https://images.indianexpress.com/2022/09/UAE-lunar-rover-20220919.jpg",
      publishedAt: "2022-09-19T12:32:21Z",
      content:
        "The United Arab Emirates will launch its first lunar rover in November, the mission manager said Monday.Hamad Al Marzooqi told The National, a state-linked newspaper, that the Rashid rover, named for… [+1479 chars]",
    },
  ];

  static defaultProps = {
    pageSize: 8,
    country: "in",
    category: "general",
  };

  static propTypes = {
    pageSize: PropTypes.number,
    country: PropTypes.string.isRequired,
    category: PropTypes.string,
  };

  constructor(props) {
    super(props);
    console.log(`Constructor from news component`);
    this.state = {
      articles: this.articles,
      loader: false,
      page: 1,
      totalResults: 0,
      pageSize: this.props.postPerPage,
    };
  }

  async componentDidMount() {
    console.log(`component did mount`);
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=78b4044bed5544fcbc1d33c5a0ff96fb&page=${this.state.page}&pageSize=${this.state.pageSize}`;
    this.setState({ loader: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loader: false,
    });
  }

  prevClickHandler = async () => {
    console.log(`Previous clicked`);
    let url = `https://newsapi.org/v2/top-headlines?country={this.props.country}&category={this.props.category}&apiKey=78b4044bed5544fcbc1d33c5a0ff96fb&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    this.setState({ loader: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      loader: false,
    });
  };

  nextClickHandler = async (event) => {
    console.log(`Next clicked`);
    if (
      this.state.page + 1 >
      Math.ceil(this.state.totalResults / this.state.pageSize)
    ) {
      console.log(`last page`);
      event.target.classList.add("disabled");
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country={this.props.country}&category={this.props.category}&apiKey=78b4044bed5544fcbc1d33c5a0ff96fb&page=${
        this.state.page + 1
      }&pageSize=${this.state.pageSize}`;
      this.setState({ loader: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);
      this.setState({
        articles: parsedData.articles,
        page: this.state.page + 1,
        loader: false,
      });
      if (
        this.state.page + 1 ===
        Math.ceil(this.state.totalResults / this.state.pageSize)
      ) {
        console.log(`last page`);
        event.target.classList.add("disabled");
      }
    }
  };

  render() {
    console.log(`Render from news component`);

    return (
      <div className="container my-3">
        <h2 className="text-center">News Monkey App 🐒</h2>
        {this.state.loader && <Loader></Loader>}
        <div className="row my-3">
          {!this.state.loader &&
            this.state.articles.map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    desc={element.description}
                    imageUrl={element.urlToImage}
                    articleUrl={element.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            type="button"
            className="btn btn-dark"
            disabled={this.state.page === 1}
            onClick={this.prevClickHandler}
          >
            Prev
          </button>
          <button
            type="button"
            className="btn btn-dark"
            onClick={(event) => this.nextClickHandler(event)}
          >
            Next
          </button>
        </div>
      </div>
    );
  }
}

export default News;
