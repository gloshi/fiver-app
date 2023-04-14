import React from 'react'
import { Slider } from 'infinite-react-carousel/lib'
import './Gig.scss'

const Gig = () => {
  return (
    <div className="gig">
    <div className="container">
      <div className="left">
        <span className="breadcrumbs">Liverr  Graphics & Design </span>
        <h1>I will create ai generated art for you</h1>
        <div className="user">
          <img
            className="pp"

            alt=""
          />
          <span></span>
          <div className="stars">
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <img src="/img/star.png" alt="" />
            <span>5</span>
          </div>
        </div>
        <Slider slidesToShow={1} arrowsScroll={1} className="slider">
          <img
            src="https://i.pinimg.com/564x/ef/74/be/ef74be57c41edfe2d2592d63ff0ac91b.jpg"
            alt=""
          />
          <img
            src="https://media.istockphoto.com/id/1218961153/photo/art-museum.jpg?s=612x612&w=0&k=20&c=9fK54fu1mjzFjDOSqg_jfrMy4Hkp8vsmImB7rLrbhJs="
            alt=""
          />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </Slider>
        <h2>About This Gig</h2>
        <p>
          I use an AI program to create images based on text prompts. This
          means I can help you to create a vision you have through a textual
          description of your scene without requiring any reference images.
          Some things Ive found it often excels at are: Character portraits
          (E.g. a picture to go with your DnD character) Landscapes (E.g.
          wallpapers, illustrations to compliment a story) Logos (E.g. Esports
          team, business, profile picture) You can be as vague or as
          descriptive as you want. Being more vague will allow the AI to be
          more creative which can sometimes result in some amazing images. You
          can also be incredibly precise if you have a clear image of what you
          want in mind. All of the images I create are original and will be
          found nowhere else. If you have any questions youre more than
          welcome to send me a message.
        </p>
        <div className="seller">
          <h2>About The Seller</h2>
          <div className="user">
            <img
              src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgVFRYYGBgYGRoYGBgYGBwYGBIYGBoZHBgYGBgcIS4lHB4rHxgYJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISGjEhISQ0MTQ0NDQ0NDQxMTQ0NDQ0NDQ0NDQ0NDQ0MTQ0NDQxNDQ0NDQ0MTQ0NDQ0NDE0NDE0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAFAgMEBgcAAQj/xAA8EAACAQIEAwUFBwQBBAMAAAABAgADEQQFEiExQVEGImFxgRMyQpHwFSNSobHB0RRi4fFyBxYzgpKywv/EABgBAAMBAQAAAAAAAAAAAAAAAAABAgME/8QAJBEAAgICAgICAwEBAAAAAAAAAAECESExAxITYUFRIjKBFEL/2gAMAwEAAhEDEQA/AM9HWTsM5Mi01uwEInClZytnWkyVQQywYL3YDwb6tpYcNTNoIctCXSR667GTHpGQsZcKZZkVbFrd5yYfxnOe8YpHMlmqQ6uGHWKbDCeFzPPaGSNIUtAdZxpeMbNUzxnMAyOmj4zwU7czGlqGJNQwCmSCniY0aY6xtnMSrGMMjwQRmtTWcXMj4gmCE0erTWOBU8ILB3jolMhIJJo8JzuvhIKGOWvIstRJK1FnGssizmMLH1Q+1YRs1/CNAzwxiocZrxpzFkbRGi8BnU2jhESlOLZbQexIfw9rWMaqKBOptGq80jo55/sMsY2Y6BG2ERY3OnumdHY6C+AA1iWM4UsALQ3hewehw2om0OrkVrSXFgpoquCyu28KKmmG1y60TVwF4KIOSArQTm9ZVUiWZsuMDYzs0XO5MYk1ZSOJJjirLcvZEeMUvZIdTJpmqnEqJE8Il0XsmPGKHZJfGLqw7xKRpnjCXodkE8Yr/tBPGHVh3iUG0TpmhDsenSeVOylJeO3mYdWHkRntV1XiZ4jqeBjOb07VXQfCxA8LG37SFo08T8paiZvkdhB6gEj1KoO0iVakjuxlKKJfIyWEnsiU8QVtztLz2bp4euBfTfe4PEee3W9opRBTKmskKJqidmKPEKIsdmqX4RJopchlOmcad+R+U1kdnqX4RFDIaX4RF1DymTLQPQ/Kef07fhPyM10ZLT/CPlFDKKfQfKOg8hkQwr/gb5R1ME/4G+U1tcrp9BFrlydBH1F5DJUy+p+BvlFtllU/AZra4FOgixhE6CJxBTMjpZPW/AYt8krH4Jri4VOgihh06CUlRnJ27MbXs/X/AAfnOPZ2v+ETZf6ZOgiWw69BCh9jHP8Atmt+ETpr2lPCdCh92HmrLG3cTNcH2tLuFF9zNAwoJQN4RS5Ehx4mxxgI0ySvZxnvsSR4gfOeYbOWcXsYlyRasfhloPmnPPZwC2bvcKAd49UzBlFzGmmKUHHYY9lO9nAyZqTHqGPLNaOyaCLmwkJsxUG15LrjuSg5zWKs1jECVl0GZJ1EUMxTrMgxGeOp2DGJXtG443HnDI3FGxjMU6yn9q8yYatJvqFhYkaT+8qqZ+55xnH4tnAuSYwqiC6s7bd5vH9TCeGyYHd9/CEcgwI0ayNzDIwvO0ynN3SN4caatlXr5OnT8+MiVMqUSzYhLSHUS8lTkW+OP0VqplinhI6UqlFw6GxH1a0sLpIdZZcZszlxovfZPtOtan37K4Okr025eHP1hXG5uqHjxmP/ANQaFVai8PiHWWjNsUzqhU72F7eUt6sx65ot/wBvL1nv24vWZ0HqdYkvU6xWPqaP9tr1nn22vWZyGq9TJOGwlZmHG14WHUvxzgWvE/bi9YNGDPs7c7SqY7D1UJte0diSRfPt5es9+3l6zMDiHvYkxYqP+IwcqKUEzTRn69Yunn6EgXG8y16zAe8Y1gKj+1TvH3usayiJKnRu2EqaheKxPumQ8lbuL5SbXW6kRolmeYrOHDsNXAzo1mGRk1HO/GdJ/I0/Er2S/wDlXzH6zcMCw9kPKYjkqXqKJrWDqstMA9Jz8rrJ1Qj2VFW7Xgaj5j9ZMyimCg8oM7T1NTHzEL5IDoHlJhpGr2z2vTC97pAuLzoFtHSWPHr3TM8xS/emaxlRnyRTos1LG7QhleK1PaAMPT2hLI0+99JSlkylxpRsutZe56TOc/U62ml1V7npKBjwGqMDNGjmTplfy7Bq5sRJ+PyBDaw4wrhMIqtcQpWo3AMfwNvJT8dkC00DAQEq63C8h05/Rl+z1l9lve/DY8ZQ8F3qqoOLNpHW3GLRSyXnKMLZAfl5CP19jPWqFFCILm23QDlAmPxGJXgEYdNQB+vWYfsdKfUlYkXg50jFPH1T76W8pNG8lxaLUkwfUSD66Qrja6pyuYBrY92O1MkeEqKZnJpEPMUuh8IWyatqRPK3nbnBrvqUggg2Oxj3Z+sF0i/EkEeXDnNl+pg/2LJ7ERXsBJGidpmdl0eYagureHab01HKBJCxuI0jjKToiRaGxyeEhYlkfpKnSzC54xGMzFlItGnZKVnmb4cK1xIGox41mfjFLTktm8VSIrKTtC2V5G5ZGPW87LMLrqDaX/B0gLACXF4MZ/sFsqp6UAMn1OEg4ep37SbU4GUjNgioguZ7E1H3M6VYUZr2Z3xCDxm0/wBECnpKplX/AE99jUV/aMdJ4ED+JoK0drTCXG5fB0rlSWGZN2lw1nI8RDmRiyC45Qxm3Zr2rFtRHCOYTIygtcyFxyS0avmhewZjwCpmeYlfvj5zV8Tk5YEXMr79i7vr1GNQl9A+aNbAuFp92E8np/ewqnZqw4mS8Dk2htVzGoyvQpcsXFqwjWXuekzjGt9+wmnVUutpUsT2Z1VC9zuZu0cQLoNwhelusdTILczJdHKysVDbK1ndLUgW1yzBR67k/ISr4HKmo41QVawuwJ3HAgi/Xn6zQ81wehUci+l1PlcED8yJVcMWaqlRiSWdkseVlP8AMwlJqTR1QinBS+mSM1xmgWAJPSx/Ow4Sp5tnDppNidW47oB3JHuXJHuniQdxtL3Vok3tK3mmCLGxUeZP+DJjKPyjSUW1hkHLsUXbQ4s17EQhmY9n6iSMpyVU77G5/IfuY32mpi0TavA0nWStV8Zc7/LmZGfMrNp07gXPHb8o9h6Q135jcHoeo8Z7XwhLFtFyb3NhvfibzRdfkxfb4I/tlcXEh9n0Pt1XkWI9Rexks0NJ4Wj3Y6kHxNFbbl9/Iqx/aVf4uiGvyVl107Rh+MthyZekbORr0mcOOS2VLki9FVMD52ncJE0H7EXpG6/Z9HFiBNVEyck0ZBlRLvJ+ZpYiaVh+ytJDcKI+/Zum3FRG43omLSMpovJQM0xezVIfCI6Mgp/hHyi6s08iKd2bocWlpwzc4Sw+VogsAI8uDWVWKM3K3YLy6terD1X3T5Rijg1U3ElERpUJsplbHEMRvsek6WV8uQnhOhQdi1e3XqIsNeY12ZzuvUrqruSOc2LD+6I1O3Q5Q6qxTm0iPjkHMR3GHuGZrjaje1A1Hd+vjHJ0KMbNEOLWNnHp1ECNStTvvwlWQuajDUbecz8vo28Hs0M41OoiTi1lNQOCNzJuo2i83or/AD+yxnFrGzi16yuNUPWRqrt1i83of+b2Ws41OsScenUSoO7dZCrVn5Ew8voXg9l1xmIp1EZGIswtKfmYRXSwtZ1ta+/EXPLmd5Aes/UyPWqsbEk2BBPkCLyJNSdlQTgmtotWsAbyvZjigHsNzfhJeIxXqQpPmQt5Rctxzs5Z6iIS3vPfSSeQMzjFs1lJRo0PBNdbsbW5QXnrKRtuIKxdTEOmkGkQeYJv4b2gXFtXKFCbW2Wzg7eZ3lqAnP0c7aTqHC/CGsPVVkuJTVaquxuw8Wv+8XTx9RDcWtzXkf4luFmS5K2gzjOJhPsFhAKqVmFhTUkHkzspUeoDEwI762Cji5Cjzaw/K8viJZQByFoLBMslkbOE6xts6TrKxVjLSuxHVFpOdp1nn22nWVRRc2nrIQbR2xdUXvB4kOLiNZpjhSQseAkbIn7gEY7W09VJh4Svgj5II7YU+sWvapDwlHw+VtPUqhCUbiIslVEub9r0HOIHbSn1lDxtAsCwgQ1LSlkmWNGxYftQj8JJGfC15m3Z+p3ZYaT7GQ5NMtRTQYqdr1BIvwnTNMzH3ref7CeSiC/5Dl2isHIsDe201LAVLrBeYYFbAAf4hDLKZVReNRp2XKdxofxvuGZbj6umsCeAf95qWNHcMzHNqALHzMJkRlWQ/icdqpdzc2gLJqL6mZxz/KT+z9LaxN4dOGABsOUhQTRpLlfZNaISaWi1p6htIVMaS1/Se4DHgOVJmb46No81j74ciR6tMwrVcEXkYgSHE1UmC3oxo4UW35wo6fKJOFZiLDbzE0jCTzRnyTSVALE4NiCQNuUZw2C1tpI4gj+JcXoi2na/6RnK0RmYrvpIHCwN+BB5gzXxNvCMI8lJoplViCyts6HceI5+MFYKgmt0dRZ2JtxCgnb9bSwdscC61nqJ0DsvVbWv81O3jKXXxwNQOux2B8eszcKk0jXvhNl9w2Doqul0DLfiPfQWPPmL2PXbnI2Y5dgSLjVfRw7/AL3M9Bz2kc41igcA7Ddh08pXcdmZud2uf7f8yYuzR9Xt0Qc4wtMXVNQF+N+8dht4b3g1qSIAB69TJbszksQfMwPiK3e8ppG3g55tIsPZ2galcMR3U3P/ACOwHnxl3U32EqXYrEKUcfHqu39wPAy5ZaLt6QazQrxZHq0W6Rp6RteWiphxbhygrHoAIdRdgVhafev4SetMM3pGUFh6R3DHf0lLRMmGsqUAz3tAO4YnKj3ovPvcPlGSV/L8PBGa5aNRbqIdy59hE5sl0PrGmJlWVPu/SUusbMR0Jl3o+6w6GUvHpaow8YfI3oPdn37ssNBuMrGQHaWOjzmctmsdFbx4+8bznReOH3jec6O2QfQOJF2Ak+gthGVoHVcyUompAzjPcMzXNG7zec0zEpdSBKLjez9Z2a1t7yZIaPOzZvLGybQTkOTVKfv2liagYJYBsqGOwzM9gbfRnYfJCGDEw3XwLB9fKdiKluPDnHHj7POi1JJY2QMTiVpgC2r9BaDsTjXY9zSoHK1/385KxiXG/A239eP14wMlUq7I3EHbxE6VCMVhCcm9sfxONd10mx+ex5EG8ao5q621XBBA24MP5jddLgkSElQMdLc9r9DARcRitaK6212O/jaDeyOMZhVVuK1W9O6pt5XJkLLMY1N/ZvwPDo3+Y7lzLRxlRDstZQ6dNa7OPlpliaJnaxG9kK6DUad9ajfXTPvgeItqH/GZfneCC/fUyGRrNy21f7my0rMCh3BuPQzLsTT/AKPENh6gBouSad/dW53Ty3nLzQafZf00g01T/h7gc9ASxAsRY+Qg7H4xGOrSOPKOZn2cIu+Ga4PFGNrA8gTxlfr5fiAbFGAHiP1BmCUXlMtyksNE3E5kACFAHKAtBIZvA/OShgnPvG35xWLAVNIlKlhGbuWWSeyeJKVCfDcdZouWZnSBDFiAR04fKZn2eHfJ8ocwmxIHImadU8kp4o1mnWR1ujBh4GBs2428ZUcNjHQ3UlfEGEDnDPbWCSOfAwcQCNThHsEOcjUsRSew16T48PnDODywhQQbjqNwZNUJj+VHvmO9of8Axnyi8Bg2RiTHs1wpdCvWIRV8ubYSTjhdD84/hMlZBa5kp8sJFvC0FobKFR2ZxKvn9Kz6us1EdmDqLXO8hY/sOtTiTxvKsCh5C0stBoXwXYVU4E/OEE7LW5mZyVsuLpGdY4d9vOdL5U7GKSTc7zoUxWa1PJ7OmpmeGINopzIxaJsaQ9cTwsIzeN1nsCYJ2OiPmNfkOA4+JgXEVAdpMqvcEc4BNazlTx+rzqjGkJC3cDun08L8PnAubAhRVHFG0vbmvIn0/OEcYbj62MjA67qeFVSn/v8ACfDvXHrKeSiPhq4uOhkDNKZpvqHutv5HrI2AqmxQ8UP5Q3Vp+1pEcxJWUAlAK1MW94bg+IkbM3ZqauNnonV5gbMPIiQ8mxRRyjHY8PPp+UMY1LqWXpuOsaALZVjdaq4PEX+vHaVj/qFiMNWdMMDetsdXBKRYXUOfEcgDsY52YrkF6V7aLuL3Pd47AbsbEbC54z3tlgE1UKqr98amg6PedEBJb/1IFiesU8qhFLy7M3QmlVuGUlbniCNiD8uMn4rFtp0gcefOe9scldajYlAHpuyhigsablQAHT4dRHEbXNuYuEoYs8D/AJE4Jw6s3jLA668zBONa5hPF4gWAEgpS1t16+HS8cI2yZfRLyCmBrLECwXcmw59YVAs5PI2IPXaBsVlzMFCjnueSi3EwnhKYVQo4Af5/czoarBmP3jyGMoJIRbQAdV4RyvNalBgUJtfdCe6w57cvODbRaDeFAangsalVQ6G4I9Qeh6GP1GtMyyzMXw7hl4fEp4MOnn4zQhikq01dDdWHqDzB8RM5LqKh3+pE7+pEgqIoCZ9mVSJn9QJ7/UiQp6Fh2DqietcRxWvB6mTqHCUmJqjvaCeyNUTczoWItc6dOlkiXjBj7xiJlITaQse9rCTjAubVLG/IflL41cgYPx1UodXLYHw+vrjBGbLrAqpxXiBxYc4ZrMrrY+kreIdqLbnbe316Tq+AQtMSHS4O8gvV5b3BuvgRb+B8p5iKe5elYN8SfC/iOjSG+IDDWNmXZlPEW43HlJ0MYxVlxDW4MbjybvCHsvqWgLMxco4/AAfNbr+0JYB7qD4eklbAgZ9hSj6l57gwtlmL1oCeliPEcY7m1DXTuBuJXsrr6HKng368oaYE7MKJoP7dF1gDvKOJHn6yJl7vXf29RrEAqqKdqa8lH1vLCLMLHcEfK8FU6HsnK/C3A+MoCc6kqwDAhhpIf3SrcQdtx/EB4/s57RT3kD/AUO5tya/H1hM4jSwB4EgfOTsPYMzNosFIU2uVe6kOQTZhYMLf3X5bzJJrKBGTNhXDlXFmFwR0IhagwVQptZdwqi2pj8THn0vD3afB02qU62nSH1K2na2lu78g1vSI+yafQ/OQl10FgLD4gkurcbgjba3QeVvzkxEJhdMBTXgsV7JeQhQEGhTsZI9nHvZierCgIzr3gPC8eRd4mmO8x6WAjy8vFv2JgkBFcd4wz2azQ030Me45tv8AC3Jv2MDOOJ5k2Hmf8TyqbWAkyjYGmBIvRKn2YzZ9YpuSyHYX4oeVj0lyKznlFoqxgJPQsdCzisQDRElYY7SLVBkrC8JSFIbqHczp1QbmdGSWSnUvHLyvZVmGoC5htKl5ZI48ai2MbvExo8Y23gTFWfUDz4jzhbFPZD47SvY6oUOocJtwx+QBTVGpNpb3Ce63L/iekTikV1IIuLGTKpV1IO4NwRxH1e8AYkvhzfdqZ58Wp/yOPjN2MG4gNTJ03YDf+5f5EhYlg/fQgPa23Bx0hXFOHGtCDffbgdpXMVsS6bH40/e0hjCeX1BVof3IxUg8jYE/reP5U9jp5gn6tIXZqsGeqvAOiv8A+w1K3/5+UmINFW3U/V4vYFiobrpP8yq5xhij3H+jLLhnt9WHpGM6wutDtv8AxKkrQEPL8XqQH6Bk+pTDqQf9SrZXWKuUP0ZYcNX3ii7AD4lyGAPI/wCoUoIS5vawBO4+KxAPHgDbaR84ofEIjBVGcqSTp212J1EX3tb1i+0A32hOqmOG1S4A5AixHz39Z6t7cInNVUJ4B0Jte17jVa5vbz34+EdrJte0lAeBdokrFs20TGAhokxTxJP6RAR6TbHxaOVXsU/5H/6mRKT72/unZnVsU8DeJASwl2VeYHyv+/ExKAM7N8K/oIvXpUvzfZBz32vPHp6QtMcT3nPQdI6AlZWdI1ngCGPkDf8AQTSEYMAwNwQCD1B3EzHNKuiiF+Jza3QDj9eMuHYzMVegtMt30uLdUv3SOu23pMuWOgTD+meMscnhmNDI7rHsLwiHEVho1sUtCKg3M6LqcTOlUTZWctxhFpbsDi7gTp0Igwor3ixaezpQgdmlW2w5fqYKrgHxvOnTphpAVzGXpPccP04xa1g4sfrbedOllFVx9E0HJT3TuV5X5kdDBmNfUutdj9XBnk6ZvYxjs9iQuKQcmDr/APIBh+ks2ZrZlYcrTp0I6EEaLcD1+cnsARv9bTp0tAU3PcPofUNr/V5KwmK1ANz5+c9nTP8A6GFalmT0gPBM+4Xbex3sQCd7eNrzp0ctgPZyiik4UW4HiTxO1yedgL8pJU6kQ24qv6Tp0SAZecGnToAIY3jddrD68Z06JgDqB7w85GzSp3gPGdOkoAxQqBVFVt7d1F5A8v8Ack4Che7Nub3Y+PTynTpohAfMq5q1duF9K+EIU67YeqChsUtY9dtweoM6dM5DNRyTHriKQqAWPuuv4WHGx5iTjSE6dMmSIekIkIBwnTogEaZ06dKEf//Z"
              alt=""
            />
            <div className="info">
              <span>Anna Bell</span>
              <div className="stars">
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <img src="/img/star.png" alt="" />
                <span>5</span>
              </div>
              <button>Contact Me</button>
            </div>
          </div>
          <div className="box">
            <div className="items">
              <div className="item">
                <span className="title">From</span>
                <span className="desc">USA</span>
              </div>
              <div className="item">
                <span className="title">Member since</span>
                <span className="desc">Aug 2022</span>
              </div>
              <div className="item">
                <span className="title">Avg. response time</span>
                <span className="desc">4 hours</span>
              </div>
              <div className="item">
                <span className="title">Last delivery</span>
                <span className="desc">1 day</span>
              </div>
              <div className="item">
                <span className="title">Languages</span>
                <span className="desc">English</span>
              </div>
            </div>
            <hr />
            <p>
              My name is Anna, I enjoy creating AI generated art in my spare
              time. I have a lot of experience using the AI program and that
              means I know what to prompt the AI with to get a great and
              incredibly detailed result.
            </p>
          </div>
        </div>
        <div className="reviews">
          <h2>Reviews</h2>
          <div className="item">
            <div className="user">
              <img
                className="pp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5pSBl6m6Zrl7nGFK0HFrMk6k5gAwozxN2AazdzgwIzWotwHCtbh8LEXHUBfBPqC9MET4&usqp=CAU"
                alt=""
              />
              <div className="info">
                <span>Garner David</span>
                <div className="country">
                  <img
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt=""
                  />
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <p>
              I just want to say that art_with_ai was the first, and after
              this, the only artist Ill be using on Fiverr. Communication was
              amazing, each and every day he sent me images that I was free to
              request changes to. They listened, understood, and delivered
              above and beyond my expectations. I absolutely recommend this
              gig, and know already that Ill be using it again very very soon
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>Yes</span>
              <img src="/img/dislike.png" alt="" />
              <span>No</span>
            </div>
          </div>
          <hr />
          <div className="item">
            <div className="user">
              <img
                className="pp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjRxW8E0qhNAnsqBKSJktwxkE0QL7CfrskuOmLQxm8EVzYQ4jdZblyVUek8uof0RwL2WI&usqp=CAU"
                alt=""
              />
              <div className="info">
                <span>Sidney Owen</span>
                <div className="country">
                  <img
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1e9-1f1ea.png"
                    alt=""
                  />
                  <span>Germany</span>
                </div>
              </div>
            </div>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <p>
              The designer took my photo for my book cover to the next level!
              Professionalism and ease of working with designer along with
              punctuality is above industry standards!! Whatever your project
              is, you need this designer!
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>Yes</span>
              <img src="/img/dislike.png" alt="" />
              <span>No</span>
            </div>
          </div>
          <hr />
          <div className="item">
            <div className="user">
              <img
                className="pp"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCVNcZoTBx8GWi3UbiEzeA9dwgWCUiVFZBElIq_kxnXO20HqitpTeTM_ErG2uCO2UMLz0&usqp=CAU"
                alt=""
              />
              <div className="info">
                <span>Lyle Giles </span>
                <div className="country">
                  <img
                    src="https://fiverr-dev-res.cloudinary.com/general_assets/flags/1f1fa-1f1f8.png"
                    alt=""
                  />
                  <span>United States</span>
                </div>
              </div>
            </div>
            <div className="stars">
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <img src="/img/star.png" alt="" />
              <span>5</span>
            </div>
            <p>
              Amazing work! Communication was
              amazing, each and every day he sent me images that I was free to
              request changes to. They listened, understood, and delivered
              above and beyond my expectations. I absolutely recommend this
              gig, and know already that Ill be using it again very very soon
            </p>
            <div className="helpful">
              <span>Helpful?</span>
              <img src="/img/like.png" alt="" />
              <span>Yes</span>
              <img src="/img/dislike.png" alt="" />
              <span>No</span>
            </div>
          </div>
        </div>
      </div>
      <div className="right">
        <div className="price">
          <h3>1 AI generated image</h3>
          <h2>$ 59.99</h2>
        </div>
        <p>
          I will create a unique high quality AI generated image based on a
          description that you give me
        </p>
        <div className="details">
          <div className="item">
            <img src="/img/clock.png" alt="" />
            <span>2 Days Delivery</span>
          </div>
          <div className="item">
            <img src="/img/recycle.png" alt="" />
            <span>3 Revisions</span>
          </div>
        </div>
        <div className="features">
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Prompt writing</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Artwork delivery</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Image upscaling</span>
          </div>
          <div className="item">
            <img src="/img/greencheck.png" alt="" />
            <span>Additional design</span>
          </div>
        </div>
        <button>Continue</button>
      </div>
    </div>
  </div>
  )
}

export default Gig