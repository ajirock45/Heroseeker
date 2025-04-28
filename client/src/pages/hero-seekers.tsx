import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Heart, Users } from "lucide-react";

type Hero = {
  id: number;
  name: string;
  description: string;
  powers: string[];
  stats: {
    strength: number;
    intelligence: number;
    speed: number;
    durability: number;
  };
  backstory: string;
  teamAffiliations: string[];
};

export default function HeroSeekers() {
  const [selectedHero, setSelectedHero] = useState<Hero | null>(null);

  const heroes: Hero[] = [
    {
      id: 1,
      name: 'Solaris',
      description: 'The radiant protector with the power of the sun',
      powers: ['Solar energy manipulation', 'Flight', 'Heat resistance', 'Light projection'],
      stats: {
        strength: 8,
        intelligence: 6,
        speed: 7,
        durability: 9
      },
      backstory: 'Once an ordinary astrophysicist, Dr. Elena Marks gained her powers during a solar eclipse experiment gone wrong when she was exposed to unprecedented solar radiation. Now she uses her abilities to protect Earth from cosmic threats.',
      teamAffiliations: ['Guardians of Light', 'Science Heroes', 'Cosmic Defenders']
    },
    {
      id: 2,
      name: 'Titanium',
      description: 'The indestructible metal warrior',
      powers: ['Super strength', 'Metal skin', 'Weapons mastery', 'Structural analysis'],
      stats: {
        strength: 9,
        intelligence: 5,
        speed: 4,
        durability: 10
      },
      backstory: 'A former special forces soldier who volunteered for an experimental armor program that unexpectedly fused with his body at the molecular level. Though the process was painful, he emerged with incredible powers and now uses them to defend the innocent.',
      teamAffiliations: ['Metal Defenders', 'Veteran Heroes', 'Urban Guardians']
    },
    {
      id: 3,
      name: 'Mindwave',
      description: 'The telepathic genius with mental mastery',
      powers: ['Telepathy', 'Telekinesis', 'Illusion casting', 'Memory manipulation'],
      stats: {
        strength: 3,
        intelligence: 10,
        speed: 5,
        durability: 4
      },
      backstory: 'Born with extraordinary mental abilities that manifested in childhood, she was initially ostracized for her differences. After years of training to control her powers, she now dedicates her life to protecting the innocent from psychic threats and helping young mutants like herself.',
      teamAffiliations: ['Cerebral Squad', 'Global Thinkers', 'Psionic League']
    },
    {
      id: 4,
      name: 'Vortex',
      description: 'Master of dimensional portals and space-time',
      powers: ['Portal creation', 'Teleportation', 'Time dilation', 'Gravity manipulation'],
      stats: {
        strength: 5,
        intelligence: 8,
        speed: 9,
        durability: 6
      },
      backstory: 'A theoretical physicist who discovered how to manipulate space-time during a lab accident. Now he uses his abilities to protect the multiverse from dimensional threats while continuing his research into the nature of reality.',
      teamAffiliations: ['Quantum Defenders', 'Science Heroes', 'Multiverse Patrol']
    }
  ];

  const handleHeroSelect = (hero: Hero) => {
    setSelectedHero(hero);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBackToList = () => {
    setSelectedHero(null);
  };

  const getInitial = (name: string) => {
    return name.charAt(0);
  };

  const getHeroColor = (id: number) => {
    const colors = [
      'from-blue-400 to-blue-600', // Solaris - blue
      'from-gray-500 to-gray-600', // Titanium - gray
      'from-purple-400 to-purple-600', // Mindwave - purple
      'from-indigo-400 to-indigo-600', // Vortex - indigo
    ];
    
    const textColors = [
      'text-blue-600', // Solaris - blue
      'text-gray-600', // Titanium - gray
      'text-purple-600', // Mindwave - purple
      'text-indigo-600', // Vortex - indigo
    ];
    
    return {
      gradient: colors[(id - 1) % colors.length],
      text: textColors[(id - 1) % textColors.length]
    };
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">Hero Seekers</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {selectedHero
              ? `Discovering ${selectedHero.name}'s incredible abilities`
              : 'Browse our roster of extraordinary heroes ready for action'}
          </p>
        </header>
        
        {!selectedHero ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {heroes.map((hero) => (
              <Card  
                key={hero.id}  
                className="hover:shadow-xl transition-all duration-300 cursor-pointer hover:-translate-y-1 border border-gray-200"
                onClick={() => handleHeroSelect(hero)}
              >
                <CardContent className="p-0 flex flex-col h-full">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 border-b border-gray-200 rounded-t-xl w-full h-48 flex items-center justify-center">
                    <div className={`bg-${getHeroColor(hero.id).gradient.split('-')[1]}-500 bg-opacity-10 rounded-full w-32 h-32 flex items-center justify-center overflow-hidden relative`}>
                      <div className={`absolute inset-0 bg-gradient-to-br ${getHeroColor(hero.id).gradient} opacity-20 animate-pulse`}></div>
                      <span className={`text-4xl font-bold ${getHeroColor(hero.id).text}`}>{getInitial(hero.name)}</span>
                    </div>
                  </div>
                  <div className="p-6 flex-grow">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">{hero.name}</h3>
                    <p className="text-gray-600 mb-4">{hero.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {hero.powers.slice(0, 2).map((power, index) => (
                        <span  
                          key={index}  
                          className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full flex items-center"
                        >
                          <Shield className="mr-1 h-3 w-3" /> {power}
                        </span>
                      ))}
                      {hero.powers.length > 2 && (
                        <span className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded-full">
                          +{hero.powers.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="px-6 pb-6">
                    <Button variant="outline" className="w-full group">
                      View details
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="space-y-8">
            <Card className="border border-gray-200 shadow-sm">
              <CardHeader>
                <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4">
                  <div>
                    <CardTitle className="text-3xl">{selectedHero.name}</CardTitle>
                    <CardDescription className="text-lg">{selectedHero.description}</CardDescription>
                  </div>
                  <Button  
                    variant="outline"  
                    onClick={handleBackToList}  
                    className="group"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 rotate-180 transition-transform group-hover:-translate-x-1" />
                    Back to Heroes
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                  <div className="lg:col-span-1 space-y-8">
                    <div className="bg-gradient-to-br from-blue-100 to-purple-100 border border-gray-200 rounded-xl w-full h-64 flex items-center justify-center">
                      <div className={`bg-${getHeroColor(selectedHero.id).gradient.split('-')[1]}-500 bg-opacity-10 rounded-full w-40 h-40 flex items-center justify-center overflow-hidden relative`}>
                        <div className={`absolute inset-0 bg-gradient-to-br ${getHeroColor(selectedHero.id).gradient} opacity-20 animate-pulse`}></div>
                        <span className={`text-6xl font-bold ${getHeroColor(selectedHero.id).text}`}>{getInitial(selectedHero.name)}</span>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                          <Shield className="mr-2 h-5 w-5 text-blue-500" />  
                          Powers & Abilities
                        </h3>
                        <ul className="space-y-3">
                          {selectedHero.powers.map((power, index) => (
                            <li key={index} className="flex items-start">
                              <span className="inline-flex items-center justify-center bg-blue-100 text-blue-800 p-1 rounded-full mr-3">
                                <ArrowRight className="h-3 w-3" />
                              </span>
                              <span className="text-gray-700">{power}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="bg-white p-6 rounded-lg border border-gray-200">
                        <h3 className="font-semibold text-lg mb-3 flex items-center text-gray-800">
                          <Users className="mr-2 h-5 w-5 text-purple-500" />  
                          Team Affiliations
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {selectedHero.teamAffiliations.map((team, index) => (
                            <span  
                              key={index}  
                              className="bg-purple-100 text-purple-800 text-sm px-3 py-1 rounded-full flex items-center"
                            >
                              <Users className="mr-1 h-3 w-3" /> {team}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="lg:col-span-2 space-y-8">
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-xl mb-4 text-gray-800">Hero Backstory</h3>
                      <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                        {selectedHero.backstory}
                      </p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg border border-gray-200">
                      <h3 className="font-semibold text-xl mb-6 flex items-center text-gray-800">
                        <Heart className="mr-2 h-5 w-5 text-red-500" />  
                        Power Statistics
                      </h3>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {Object.entries(selectedHero.stats).map(([stat, value]) => (
                          <div key={stat} className="space-y-2">
                            <div className="flex justify-between items-center">
                              <h4 className="capitalize font-medium text-gray-700">
                                {stat}
                              </h4>
                              <span className="font-semibold text-gray-800">{value}</span>
                            </div>
                            <div className="relative pt-1">
                              <div className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blue-600 bg-blue-200 mb-2">
                                {stat}
                              </div>
                              <div className="flex h-5 overflow-hidden text-xs bg-gray-200 rounded-full">
                                <div
                                  className="hero-stat-bar bg-blue-500 flex flex-col justify-center text-center text-white text-xs whitespace-nowrap px-2 rounded-full"
                                  style={{ width: `${value * 10}%` }}
                                >
                                  {value}
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
    </div>
  );
}
