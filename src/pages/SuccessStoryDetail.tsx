import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Star, TrendingDown, Calendar, Target, Dumbbell, Apple } from "lucide-react";
import { successStories } from "@/data/successStories";

const SuccessStoryDetail = () => {
  const { id } = useParams();
  const story = successStories.find((s) => s.id === id);

  if (!story) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-4 py-20 text-center">
          <h1 className="font-poppins text-4xl font-bold text-foreground mb-4">Story Not Found</h1>
          <Link to="/success-stories">
            <Button className="bg-gradient-hero">Back to Success Stories</Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const storySchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: `${story.name}'s Weight Loss Success Story`,
    description: story.quote,
    author: {
      '@type': 'Person',
      name: story.name,
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO
        title={`${story.name}'s Success Story - FitJourney USA`}
        description={story.quote}
        keywords={`${story.name} weight loss, transformation story, ${story.location}, fitness success`}
        canonicalUrl={`/success-stories/${story.id}`}
        structuredData={[storySchema]}
      />
      <Navbar />
      <main className="py-12 sm:py-16 md:py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <Link to="/success-stories" className="inline-flex items-center gap-2 font-lato text-base font-medium text-primary hover:text-primary/80 transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" />
            Back to All Stories
          </Link>

          {/* Hero Section */}
          <div className="mb-8 sm:mb-12 animate-fade-in">
            <Card className="border-2 border-primary shadow-hover bg-gradient-to-br from-primary-light to-background overflow-hidden">
              <CardContent className="p-6 sm:p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-6 sm:gap-8 items-center">
                  <div className="space-y-4 sm:space-y-6">
                    <div className="flex gap-1 mb-4">
                      {[...Array(story.rating)].map((_, i) => (
                        <Star key={i} className="h-6 w-6 fill-secondary text-secondary" />
                      ))}
                    </div>
                    <h1 className="font-poppins text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                      {story.name}'s Journey
                    </h1>
                    <p className="font-lato text-base sm:text-lg md:text-xl text-muted-foreground">
                      {story.location} • Age {story.age}
                    </p>
                    <div className="bg-background/80 rounded-2xl p-4 sm:p-6">
                      <p className="font-poppins text-2xl sm:text-3xl font-bold text-primary">
                        {story.result}
                      </p>
                    </div>
                  </div>

                  {/* Stats Cards */}
                  <div className="grid grid-cols-2 gap-3 sm:gap-4">
                    <Card className="border-2 border-border bg-background">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <TrendingDown className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                        <p className="font-lato text-xs sm:text-sm text-muted-foreground">Starting Weight</p>
                        <p className="font-poppins text-xl sm:text-2xl font-bold text-foreground">{story.startWeight} lbs</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-border bg-background">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <Target className="h-6 w-6 sm:h-8 sm:w-8 text-secondary mx-auto mb-2" />
                        <p className="font-lato text-xs sm:text-sm text-muted-foreground">Current Weight</p>
                        <p className="font-poppins text-xl sm:text-2xl font-bold text-foreground">{story.currentWeight} lbs</p>
                      </CardContent>
                    </Card>
                    <Card className="border-2 border-border bg-background col-span-2">
                      <CardContent className="p-4 sm:p-6 text-center">
                        <Calendar className="h-6 w-6 sm:h-8 sm:w-8 text-primary mx-auto mb-2" />
                        <p className="font-lato text-xs sm:text-sm text-muted-foreground">Timeline</p>
                        <p className="font-poppins text-xl sm:text-2xl font-bold text-foreground">{story.timeline}</p>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 sm:space-y-8">
              {/* Full Story */}
              <Card className="border-2 border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl sm:text-2xl">The Full Story</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <blockquote className="border-l-4 border-primary pl-3 sm:pl-4 py-2 bg-primary-light/50 rounded-r-lg">
                    <p className="font-lato text-base sm:text-lg italic text-foreground">"{story.quote}"</p>
                  </blockquote>
                  <p className="font-lato text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {story.fullStory}
                  </p>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="border-2 border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl sm:text-2xl">Challenges Overcome</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {story.challenges.map((challenge, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary-light flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-poppins text-xs font-bold text-primary">{index + 1}</span>
                        </div>
                        <p className="font-lato text-sm sm:text-base text-muted-foreground">{challenge}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* Tips */}
              <Card className="border-2 border-border shadow-card bg-primary-light/30">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl sm:text-2xl">Top Tips from {story.name.split(' ')[0]}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {story.tips.map((tip, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="h-6 w-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="font-poppins text-xs font-bold text-primary-foreground">✓</span>
                        </div>
                        <p className="font-lato text-sm sm:text-base text-foreground font-medium">{tip}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Exercise Routine */}
              <Card className="border-2 border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl flex items-center gap-2">
                    <Dumbbell className="h-5 w-5 text-primary" />
                    Exercise Routine
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="font-lato text-sm text-muted-foreground">
                    {story.exerciseRoutine}
                  </p>
                </CardContent>
              </Card>

              {/* Favorite Foods */}
              <Card className="border-2 border-border shadow-card">
                <CardHeader>
                  <CardTitle className="font-poppins text-xl flex items-center gap-2">
                    <Apple className="h-5 w-5 text-primary" />
                    Favorite Foods
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {story.favoriteFoods.map((food, index) => (
                      <li key={index} className="flex items-center gap-2">
                        <div className="h-2 w-2 rounded-full bg-primary" />
                        <p className="font-lato text-sm text-muted-foreground">{food}</p>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* CTA */}
              <Card className="border-2 border-primary shadow-hover bg-gradient-hero">
                <CardContent className="p-6 text-center space-y-4">
                  <h3 className="font-poppins text-xl font-bold text-primary-foreground">
                    Start Your Journey Today
                  </h3>
                  <p className="font-lato text-sm text-primary-foreground/90">
                    Use our calorie calculator to begin your transformation
                  </p>
                  <Link to="/calculator">
                    <Button className="w-full bg-background text-primary hover:bg-background/90">
                      Calculate My Calories
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* More Stories */}
          <div className="mt-12 sm:mt-16">
            <h2 className="font-poppins text-2xl sm:text-3xl font-bold text-foreground mb-6 sm:mb-8 text-center">
              More Success Stories
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
              {successStories
                .filter((s) => s.id !== story.id)
                .slice(0, 3)
                .map((otherStory) => (
                  <Link key={otherStory.id} to={`/success-stories/${otherStory.id}`}>
                    <Card className="h-full border-2 border-border shadow-card transition-all hover:shadow-hover hover:-translate-y-2 hover:border-primary">
                      <CardContent className="p-6 space-y-4">
                        <div className="flex gap-1">
                          {[...Array(otherStory.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-secondary text-secondary" />
                          ))}
                        </div>
                        <h3 className="font-poppins text-lg font-bold text-foreground">
                          {otherStory.name}
                        </h3>
                        <div className="bg-primary-light rounded-lg p-3 text-center">
                          <p className="font-poppins text-sm font-bold text-primary">
                            {otherStory.result}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SuccessStoryDetail;
