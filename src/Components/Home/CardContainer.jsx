import React from "react";
import Card from "./Card";
import styles from "./Card.module.css";

const CardContainer = () => {
  const cardsData = [
    {
      title: "Doremon",
      description:
        "Doraemon (ドラえもん) is a Japanese manga series written and illustrated by Fujiko F. Fujio. The manga was first serialized in 1969. Its chapters were collected in 45 tankōbon volumes published by Shogakukan from 1974 to 1996.",
      imageUrl:
        "https://m.media-amazon.com/images/I/51dMgo8EChL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      title: "Kung Fu Panda",
      description:
        "Kung Fu Panda is an American martial arts comedy media franchise that originally started in 2008 with the release of the animated film of the same name produced by DreamWorks Animation.",
      imageUrl: "https://i.ytimg.com/vi/_inKs4eeHiI/maxresdefault.jpg",
    },
    {
      title: "Chhota Bheem",
      description:
        "Chhota Bheem is an Indian animated comedy adventure television series, created by Green Gold Animations based in Hyderabad.",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/en/thumb/f/f9/Chhota_Bheem.jpg/220px-Chhota_Bheem.jpg",
    },
    {
      title: "Shin Chan",
      description:
        "Crayon Shin-chan (Japanese: クレヨンしんちゃん, Hepburn: Kureyon Shin-chan) is a Japanese manga series written and illustrated by Yoshito Usui. Crayon Shin-chan made its first appearance in 1990 in a Japanese weekly magazine called Weekly Manga Action, which was published by Futabasha.",
      imageUrl:
        "https://miro.medium.com/v2/resize:fit:1400/1*jUNUAsBJXvXz0twWslbyTQ.jpeg",
    },
    {
      title: "Tom & Jarry",
      description:
        "Tom and Jerry is an American animated media franchise and series of comedy short films created in 1940 by William Hanna and Joseph Barbera. Best known for its 161 theatrical short films by Metro-Goldwyn-Mayer, the series centers on the rivalry between the titular characters of a cat named Tom and a mouse named Jerry. Many shorts also feature several recurring characters",
      imageUrl:
        "https://static.euronews.com/articles/stories/07/38/86/86/1200x675_cmsv2_34816e51-346c-525e-9d16-c92108f88346-7388686.jpg",
    },
    {
      title: "Wall-E",
      description:
        "WALL-E (stylized with an interpunct as WALL·E) is a 2008 American animated romantic science fiction film[5] produced by Pixar Animation Studios for Walt Disney Pictures. The film was directed by Andrew Stanton, produced by Jim Morris, and written by Stanton and Jim Reardon.",
      imageUrl:
        "https://www.dexerto.com/cdn-cgi/image/width=3840,quality=60,format=auto/https://editors.dexerto.com/wp-content/uploads/2023/12/12/wall-e-2-details.jpg",
    },
  ];

  return (
    <div className={styles.cardContainer}>
      {cardsData.map((card, index) => (
        <Card
          key={index}
          title={card.title}
          description={card.description}
          imageUrl={card.imageUrl}
          userImageUrl="https://st5.depositphotos.com/51587144/67258/v/450/depositphotos_672586202-stock-illustration-circle-avatar-portrait-women-various.jpg"
        />
      ))}
    </div>
  );
};

export default CardContainer;
