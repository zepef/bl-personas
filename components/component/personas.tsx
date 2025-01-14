/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/eVvahyfd5py
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import { CardTitle, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"
import { SelectValue, SelectTrigger, SelectItem, SelectContent, Select } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"

export function Personas() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-gray-100 p-8">
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Gérer les personnages</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div className="flex items-center space-x-2">
                <Select id="game-select">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un jeu">Sélectionnez un jeu</SelectValue>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="the-live-thriller">The Live Thriller</SelectItem>
                    <SelectItem value="the-live-holdup">The Live Holdup</SelectItem>
                  </SelectContent>
                </Select>
                <Select id="character-select">
                  <SelectTrigger>
                    <SelectValue placeholder="Sélectionnez un personnage">Sélectionnez un personnage</SelectValue>
                  </SelectTrigger>
                  <SelectContent />
                </Select>
              </div>
              <div className="flex items-center space-x-2">
                <div className="space-y-2 flex-1">
                  <Input id="new-game" placeholder="Entrez un nom de nouveau jeu" />
                </div>
                <div className="space-y-2 flex-1">
                  <Input id="new-name" placeholder="Entrez un nom de nouveau personnage" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="space-y-2 flex-1">
                  <Input id="new-genre" placeholder="Genre" />
                </div>
                <div className="space-y-2 flex-1">
                  <Input id="new-age" placeholder="Age" />
                </div>
                <div className="space-y-2 flex-1">
                  <Input id="new-role" placeholder="Rôle" />
                </div>
                <div className="space-y-2 flex-1">
                  <Input id="new-adresse" placeholder="Adresse" />
                </div>
                <div className="space-y-2 flex-1">
                  <Input id="new-nationalite" placeholder="Nationalité" />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="space-y-2 flex-1">
                  <Textarea id="new-physical-details" placeholder="Détails physiques" rows={6} />
                </div>
                <div className="space-y-2 flex-1">
                  <Textarea id="new-personality-traits" placeholder="Traits de caractère" rows={6} />
                </div>
              </div>
              <div className="flex items-center space-x-2">
                <div className="space-y-2 flex-1">
                  <Textarea id="new-personal-history" placeholder="Résumé histoire personnelle" />
                </div>
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" variant="outline">
                Réinitialiser
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white" variant="outline">
                Effacer
              </Button>
            </div>
            <div className="flex gap-2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white">Créer</Button>
              <Button className="bg-green-500 hover:bg-green-600 text-white">Enregistrer</Button>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div>
        <Card>
          <CardHeader>
            <CardTitle>Personnalité</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 relative">
              <Textarea className="min-h-[400px]" readOnly />
              <div className="absolute bottom-2 right-2 text-sm text-gray-500">
                tokens{"\n"}
              </div>
            </div>
          </CardContent>
          <CardFooter className="flex justify-between">
            <div className="flex gap-2">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white" variant="outline">
                Réinitialiser
              </Button>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white ml-auto" variant="outline">
                Générer
              </Button>
            </div>
          </CardFooter>
        </Card>
      </div>
    </div>
  )
}
