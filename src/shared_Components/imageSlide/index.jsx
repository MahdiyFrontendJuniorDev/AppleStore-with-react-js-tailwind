import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <div className="bg-indigo-400 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">Steve Jobs</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="https://assets.entrepreneur.com/content/3x2/2000/1617286255-GettyImages-80145055.jpg?crop=1:1s"
            alt="Profile image"
          />
          <p className="font-bold">
            Steven Paul Jobs February 24, 1955 – October 5, 2011 was an American
            entrepreneur, industrial designer, business magnate, media
            proprietor, and investor. He was the co-founder, chairman, and CEO
            of Apple; the chairman and majority shareholder of Pixar; a member
            of The Walt Disney Company's board of directors following its
            acquisition of Pixar; and the founder, chairman, and CEO of NeXT. He
            is widely recognized as a pioneer of the personal computer
            revolution of the 1970s and 1980s, along with his early business
            partner and fellow Apple co-founder In 1985, Jobs was forced out of
            Apple after a long power struggle with the company's board and its
            then-CEO, John Sculley. That same year, Jobs took a few Apple
            employees with him to found NeXT, a computer platform development
            company that specialized in computers for higher-education and
            business markets. In addition, he helped to develop the visual
            effects industry when he funded the computer graphics division of
            George Lucas's Lucasfilm in 1986. The new company was Pixar, which
            produced the first 3D computer-animated feature film Toy Story 1995
            and went on to become a major animation studio, producing over 25
            films since.
          </p>
        </div>
      </div>
      {/* 2  */}
      <div>
        <div className="bg-blue-400 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">Tim Cook</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="https://assets.bizclikmedia.net/1800/b6c6ff5c48645d7e89ddb887e78c8a7d:1ed358f656fc81939282bc62a0f10ac5/ezgif-3-0c37f04d8d.jpg"
            alt="Profile image"
          />
          <p className="font-bold">
            Timothy Donald Cook born November 1 , 1960 is an American business
            executive and engineer who has been the chief executive officer of
            Apple Inc. since 2011. Cook previously served as the company's chief
            operating officer under its co-founder Steve Jobs. Cook joined Apple
            in March 1998 as a senior vice president for worldwide operations,
            and then served as the executive vice president for worldwide sales
            and operations.3 He was made the chief executive on August 24, 2011,
            prior to Jobs' death in October of that year. During his tenure as
            the chief executive, he has advocated for the political reformation
            of international and domestic surveillance, cybersecurity, American
            manufacturing, and environmental preservation. Since 2011 when he
            took over Apple, to 2020, Cook doubled the company's revenue and
            profit, and the company's market value increased from $348 billion
            to $1.9 trillion.After graduating from Auburn University Later, he
            served as the chief operating officer of the computer reseller
            division of Intelligent Electronics. In 1997, he became the vice
            president for corporate materials at Compaq for six months, but left
            the position after being hired by Steve Jobs.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-cyan-400 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">Eddy Cue</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAIUA/QMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIECAP/xAA5EAABAwMCAwUGBAUFAQAAAAABAAIDBAUREiEGMUEHE1FhcSIjMoGRoRRCUrEVYpLB0TM1U4KiFv/EABkBAQADAQEAAAAAAAAAAAAAAAABAgMEBf/EACIRAQEAAgEEAgMBAAAAAAAAAAABAhEDBBIhMRNRIjJhI//aAAwDAQACEQMRAD8AvFERAREQEREBERAREQEREBERARYymUGUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBEWvvl3pLJb31tfKI4m7AE7vd0aPMoO5NMyCJ8sr2sjYMuc44AChN17U+H6EubB+IrCM+1EwBufVxCrzifiiu4h7x9RUSMpifYpoXaQ0dM+JUFqs98Q3BOeRdnCC0rp2wV7iTbKCjjjI9kzPL3fQYWkZ2tcU6g589vc1rgS0UbxkeGdSgssjmMwZjnGcDmutrnL8M1ANP6gcoPQHBvalb75LHRXJjKKvd8OHZjk9HHkfIqwgV5PAp9LG6y2UdSSQd/Hp9VNrZ2tXO022lon00FR3LdPeSvOogbDPjt1QX2ihXA/H9JxNL+EmY2nrdOpsYfkSDrpP8AZTVAREQEREBERAREQEREBERAREQEREBERAREQEREGCqd7Qbo7iCvkZTt1UVAXNY7OGvdyLvrsPHGeSt6qf3dNK/9LCfsqPs9MyaxEAhsLSA0EYyUTJtGZZBCzFQwYaNWhp3J8lroY2z95NlsbH7hjTywp5VcPPdQhtHEx9TJu97uQC0TuEblA/M8AIP52LOckra8NRiqpSx2thz4FoBIC+I0xx+7jbI79btsKV1vD1b3OXxu0NHVasWOeWXunh+GnkBsFbvis4smjJL9xgu54HIL7x0tRMGtdlufIYKlkHC7oYi+Uc8HGN18K6lbTYaBgDks/lm9NPhuttbTGusddSVdE8xyQSCRhzz35eh3C9KWCvF0tNLXDI76MOIPMHwXnraqt22HFpPPoNiMq9OAIjFwlb2k82F2PDJJwtZXPZpIkRFKBERAREQEREBERAREQEREBERAREQEREBERB17gM0NQAMkxOwB12KpW3v1ww0+rDGHJI8VeJ2CpS4QRUPENZS0h1Rx1RaB4ZPL5Z+yrl6Ww/aJTbAGtxtut3CIy3BYD6rS02Axhzggb55ea2dNNHIzLZGu9DzXHJXp3WnGooIZSfE7AnfC1bLVBA4tYwEZ5nclbtzi3AcF8XBvc6x1ypRJpo6yNjWacfZQjiJg7t7hsTs1TS4zMY13t7+qhl2kZI8+0JADsRyUSXe05WaaS1Od37oI+T9i3zXobhNnd8OUDcY90FQXDUWm/NdLsxxJHmvQ1j/2ijwQfdN5cuS7MfTzc/bvIiKygiIgIiICIiAiIgIiICIiAiIgIiICIiAiIg+c7yyJ7x+VpKpmCjnF6mqqk4dI90h9rYuyQf3V0O3BBGcqt71SmmlfHv7qU4PXBOyy5bY6enky2014E07xTOmMdPpBkxtn1PgtTU0tvhZrt3Ej6d2Q3TG7WwuPIbciVMHUUNbAIpYw9uN2nkfULhLYaV80U7aRnfxgCN/6QOWPRYY5ajqy47a6PD77qcRSVkdU12MS684CcW3SsoYWUkBaJZHkNOrGB4qQQUraWBjGNaDq5NGFDeKZHS8QxtaMmNuR65Ub3VrNTSMz28S95NeL7UaG7kRxPIHzWpqmQ005FvqXyDI1h5OR6g8vorPq6GCroI2y0sbtJywFmzT1x4KOVVjb3slRPE3JHor/ACRleKtJb3YmEwG0bS4n+Uc/2XoHhSKSHh6gZMcv7kOPz3/uqM/h4lp5RHnPeBgaOocQP7r0JSxCCnihHKNgb9BhbYXw5OSafVERaMhERAREQEREBERAREQEREBERAREQEREBCiIMKI8bxBhieAR3h3PjjKl61HFNK6qss4YMyRgSN9Qc/tlVzm8dNOLLty2ituma1uHcxtuudxuzKbu4aZneVEpxG3PM/4XSYzW1r2HYjH2WpijloayprpYpppGkjUxuru2DwHNcUj1NpHHVZqY4J3gTDBc07D5FQ7i+pp6a8NdOdBOXDTuT4LdsrGXOlaWU1f7fwSCA7EqJ3uzATGrkfXTnOkOlid06clpMWeVuvSR8P3htbS4kbpcM4Pj4Lr8QV0cdM8kjPgotb7hI+vZSU0UjznDtIxgLb8S0gY2CF2e8kwcfuq3HVW7/wAXLgQS1lzpmwjUTWRPOR+Vrmud9mlXo1Vb2PUOau41QHu4sRNPiTuVaXVdWE8PN5L5ZREV2YiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgLi4A7EZBG65LhK9sbXPeQ1rQS5x5AIK5ugFpvM1A7/TPvITnoenyOR8l96GdsjnE7kjBUGob+eJ+Kb/M92InvY6lwfhY32R9QMnzJUhoal8Tg7fU3Z7cLk5Me3J6HFn3YRtqeudZqiQPlMUbzqYdOpufRam/cUOmpHRicOBzs1mnY7b/Vb1s1HXsbrDHbfC5a6toLe0a208TQ075PJT3tpJbvSI2KX8I99bOwNc8ewCPhHiuhe7y6rrpKiME7aY/PzTim6R1NSIKMARDnjwWmbKwODiCQ3w6BPfmsc8r6j0JwPZm2PhykpjvM9vezu/U925+mw+S36hXZdxa3iSxRMqHBtdTjTI0nd7Rs132381NchdWtPPt2yiIgIiICIiAiIgIiICIiAiIgIiICIiAiLGd0GUXynnip4nzTSMjiYMue9wAaPElVvxR2v2ugc6msMH8TqBs6Qu0Qs+fN3y+qmS1G1lOkYxjnvcGsaMlxOAB6qq+03tKtRslZaLFUmpq6gdy6eIe7jaT7RDupxkDHUqsOLONL1xJGY6+ueYAcmCH2Izv1A5/PKjzSXZGABnOAFpjx/aLk3XCVyFou0Us2BTP9iU+DehHoftlWrVwOaBPCQRjO3IhU1CzIGVYPAvEsIpP4VdJWtbHnuJnkAaf0k+Sw6nit/KOnpeSfpXarZpmFz6Z2h3MjGQT6KP3G63aaN0TpGsafi09VNqiniqC6SjngqGjn3bw7HrjktDcqJxf7MWM/yrk3Z7devqooyFxO+S48yVi5tFLbnuxh2NvVSNtAKaN9RVPbHGwZc5xwAoZxLe6esm/D04f3DTgvIxnzx4LTjxuV/jLkswxv242S6TUADKeeWB+n2ZYnlrmn1UvsPbDxHbSIrj+GucTTj34Mcn9bdvq0qt3amu9Fhoy88845ru04HpGydrfDlwAbWGe3yH/mbqb/AFNypvb7jRXKDvrfVwVMf6oZA4D6Lx6xzowx7CWknBwV2qa4VVHOJqaV0czdhLG4seB4am4KXCHc9g6gmV5ysna3xDbtLamVtbGPyzDP/oYKszhntZsN3LIbg422qccaZnZjcfJ/+QFS41O1hIuEcjZGB7C1zXDLXNOQR4rmFVIiIgIiICIiAiIgIiICIiAoD2mcdVXChgpqGkikmqGFwllccM/69fqsorYTdRVGcR8UXm+VJdda+acN3bHq0xt9GDb58/NaR0rnA5PREW3pRmEamzA9CuwwAta7qRuiK0K+gJOPVcbQ5tVeYxUMD4tenu84BAz/AIRFGSI2lZVf/O8VGotUYhbGRmMHZzSN2lW+xjZz7YCIuLqpPFeh0d3LFY9qtbLFc47cw4p44myYHVziRn5Y+6gZALAcc+ayi245rCOflv8ApWYiXR6TvpGQfXoucZ940+OURXZV2MAwO8jlfUsGERaqhjZj4Qvi5obnGfqsIoonHZlxtc+H7jS21p/E2+qqGRmnkccRlx+Jh6enJekxyRFjn7XjKIiokREQEREH/9k="
            alt="Profile image"
          />
          <p className="font-bold">
            Cue joined Apple in 1989 and was instrumental in creating the Apple
            online store in 1998, the iTunes Store in 2003, and the App Store in
            2008. In his early years at Apple, he was a manager of software
            engineering and customer support teams. In 1999, he convinced Apple
            to work with Akamai Technologies Inc. on new streaming functions for
            its QuickTime video software. He also played a key role in
            developing Apple's iLife suite of applications, namely Apple Books,
            the iAd advertising service, and Apple's App Store of more than
            700,000 applications. Cue is widely known at Apple for turning
            around its failed products, such as the MobileMe data syncing
            service as well as iCloud in 2011, which now has more than a quarter
            billion users. Likewise, Cue is famous for advising Steve Jobs to
            consider creating a smaller version of the iPad based on his own
            experience with the product. While Jobs was originally against the
            idea, Tim Cook eventually agreed with the concept upon becoming CEO
            after Jobs' death.The son of a Cuban mother and a Spanish father,
            Cue resides with his wife Paula whom he met at Duke University in
            Los Altos, California, and tries hard to maintain a low profile.Cue
            is a fan of rock music, with Bruce Springsteen as one of his
            favorite artists
          </p>
        </div>
      </div>
      <div>
        <div className="bg-orange-300 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">John Giannandrea</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAG0AbQMBIgACEQEDEQH/xAAcAAACAgMBAQAAAAAAAAAAAAAABQQGAgMHAQj/xAA3EAABAwIDBgMHAgYDAAAAAAABAAIDBBEFEiEGEyIxQWFRcbEHFDKBkaHBFdEjM0JS4fBiwtL/xAAZAQADAQEBAAAAAAAAAAAAAAAAAQQCAwX/xAAeEQACAwACAwEAAAAAAAAAAAAAAQIDESExEjJRIv/aAAwDAQACEQMRAD8A42hCEACELZTwvqZ2QxC73mwQAQwyzvDIYy956BMBgVWC4SlkbhyBde/0TnD6VmFUkkjoWue8WBJuTbwU/CpvepWzV5GXo1vC1o7rDkbUdKy7BHNtnlc021BZ/laZ8MLG3hmbKb8jof2V+lwyKolzU8jWttclxtYeqX4nhVNTxZ5GEX1GlgfnzR5DcSjTQSwECWMtvyJ6rUnFS0FzxGXBrtA0t4fmoVTAN2Zo2kBthI23Lpcdk0zDREQhC0IEIQgAQhCABNdmYny4vG5htuwXHytb8pUn+wlP7ztNTRkkMyuLwOotySfQ12dIgwqkxOEU74yXsHFktmF0wj2FiMADZMjxYi/5T/CqWOn3jYm8TzmcTzJTuGHh16qZybeFsYqKKBVbI18IvSuidY3u7Uk+R0SDFsHxg5n1lG6Ww/mNcZCPlcAfILr8kehChysAYbpa0ayMj54xFhjeWuEjXDkHNDVpomPlMkT9GuBaSfD912HaPDaSanmdUQsfYcyAudQYG6Ko3kH8oa2PRbjZpxsq8eSmyRuikfG62Zji027LBMMeYWYxVAi13Xt5gJeu6JQQhCYAhCEACu3snZF+vVU8pH8Gnu2/dwCpKu3s2oJZJKytEro4mhsRs2+Y3Dv207rMnwagtZ2bDzeXMOuqctDt3wXv5qnVNbTxRMmqKl8MDmtyBjSXuPhYC6VM2oElW9mH11S9jTZ2/iLcp8D9FKi9rToYLnCx5qLVNysPEkZxx0WFmqkfHmabavGqr9XtBVvlzzVboaRrc7iyLNlb4o4Y8zkbbR3NG4W0OhVXoXOfFNFHbPbh+q3VuKU9exzsOxJ09xcxytIuPG1vRQIJmU+WtjBcByaO6UVjM2PYlH2tiMOLnT4owfUJMrJtmHPkppHjK+72ubfkdHD1VbVceiGSxghCFoyCEIQALqvscqI5cKxKiewZ4p2zA+OYD/wuVK/eyXEKSircRhqKhsUtSyNsLXG2cgnQd9eSxZ6nWl5NHZIaCOZ4eM9wObQCAtc0FNHOC4F0v9Iy6+ij1uKfptBvBdz38LGN1LiVApzW+5Pma5rax/EXuGZt/DyUpel9JeN0jDhUjcoySOzOPjrrqvMOlhraXdxvcSwZdWX08rKu4/tRWshFFDSZqgWv1YO91CwStxZtS6esLA7QBrBayMHHHwP8WwemkbvKnLIGn4d3lHoq9IAKGvqWsFqcNDG20vmFvorViWIb3DzIP7eviqxPIyPZqoMrg3eysbr1JOb/AKoXZmfRRdr8rKWFjzeZ0xcT1Isb+oVWTfaeq95xARtcHMhbluDzJ5pQqq1kSK+SlN4CEIWziCEIQALZTzPpqiKoj+OF7ZG+bTcei1oQB9AOnbXUNNUQ8cb2tmhIPj0+6wbh1W2rj94xSd9M5t3Q7tlwexty7Kk+zHaQtj/Rqt4vGc9O53QdW/7+F0+phFTAJQ8tLhe41spJLxZ6FclLBbPg9PmMjap7JC34nQku9bKvVNHWmuEdPXNeDpaRnERfsewViro6zc237ybfFnICUU9I6jlNXPOwkt1sk2dcSRJxWRtJgljZ0s7iQL305fhULbaqI2boqa/FNUmVw/4taQPu5Mcfx1jmlketzbTwVHxSvkrauQ1LiWRx5GNHJvX1W6o7LSa6X5wWIXvJeKkjBCEIAEIQgAQvQCdALlb4YSHB0o06DugApJpaKVlZEbSRnNH5rt9Fj2eghMotmja469CL3C4jOf4br87XC69stSQ4psthzw7M5sIjcQerdPqLLndiSKKV8Cq2ppznBluMtrOHX8KtYttDJURGGmz5nkaBNMR2PllqCYJXlv8AadfvzUOfCKfA4TNXyRRNHV7tXdu64Joofm/ZledSSMhNRVGwA0CrM8u9ncG8rpxtBjfv0eWBhbFfK0nS/eyS0rLm5VFcWuyaySbxG3ILAOF/Beup3WuzXsVmNTfoFm02XU5YQyCDYiy8U57GSjiHz6hRZIZI3Wy3HQjkUsFhrWccecno0cysFKaMoyhCWgjJoDRZosPVBQEdVsZpnHCAOrh90xw7FMSwsuOG1s1OH/E1ruE/I6KDJ08x6rYsyHuDefazaKaMtlxepDSP6CGfcAFIZq2R8xlqHvmmdzfI8ud8yVlKS4ht7AqI9wzZQAAElFLoG2+wkkdK67joOQUiEEjTQeKwjhDjclbwLaJmTIaDsvbrw8kBMZ7ex0WQkPitZQkB/9k="
            alt="Profile image"
          />
          <p className="font-bold">
            John Giannandrea is a Scottish software engineer and businessman. He
            co-founded Metaweb, led Google Search and artificial intelligence,
            was co-founder and CTO of the speech recognition company Tellme
            Networks, Chief Technologist of the web browser group at Netscape,
            senior engineer at General Magic, and is now a senior executive at
            Apple Inc. In December 2018, it was announced that Giannandrea had
            been appointed Senior Vice President of Machine Learning and
            Artificial Intelligence Strategy at Apple, the department rumored to
            have the most involvement with Apple's John Giannandrea is Apples
            senior vice president of Machine Learning and AI Strategy, reporting
            to CEO Tim Cook. John joined Apple in 2018 and oversees the strategy
            for artificial intelligence and machine learning across the company
            and development of Core ML and Siri technologies. electric car
            project. John graduated from the University of Strathclyde in
            Glasgow, Scotland where he earned a Bachelor of Science with Honors
            in Computer Science, and was awarded a Doctorate Honoris Causa. John
            is on the board of trustees at the SETI Institute and Castilleja
            School.
          </p>
        </div>
      </div>
      <div>
        <div className="bg-red-400 rounded-md text-white p-4 ">
          <h1 className="text-3xl font-bold">John Ternus</h1>
          <img
            class="inline object-cover w-48 h-48 p-4 mr-2 rounded-full"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHphFp9KOk9dxzo2HI_vOKyxHwckl5fBbZAggTL5jwow&s"
            alt="Profile image"
          />
          <p className="font-bold">
            Ternus holds a bachelor's degree in mechanical engineering from the
            University of Pennsylvania.He joined Apple in 2001 as a member of
            the product design team. He has transitioned to the role of vice
            president of hardware engineering in 2013. Since joining Apple,
            Ternus has presented new Mac and iPad hardware at WWDCs, revealing
            refreshes of the iMac and MacBook Pro, the new 2018 iPad Pros, and
            the iMac Pro and the completely redesigned 2019 Mac Pro. He also
            revealed the 2020 M1 MacBook Air, MacBook Pro, and Mac mini. He was
            promoted to the role of senior vice president of hardware
            engineering on January 25, 2021, replacing Dan Riccio.He introduced
            the 2021 24” iMac at the Apple April 2021 event. At Apples
            “Unleased” event, he unveiled the 2021 MacBook Pros.John Ternus is
            Apples senior vice president of Hardware Engineering, reporting to
            CEO Tim Cook. John leads all hardware engineering, including the
            teams behind iPhone, iPad, Mac, AirPods, and more. John joined
            Apples Product Design team in 2001 and has been a vice president of
          </p>
        </div>
      </div>
    </Slider>
  );
}
