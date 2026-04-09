"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../components/ui/card";
import { Button } from "../components/ui/button";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Badge } from "../components/ui/badge";
import { Avatar, AvatarFallback } from "../components/ui/avatar";
import { Switch } from "../components/ui/switch";
import { Slider } from "../components/ui/slider";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../components/ui/tabs";
import { Progress } from "../components/ui/progress";
import { 
  Heart,
  User,
  Mail,
  Bell,
  Calendar,
  FileText,
  Settings
} from "lucide-react";

export function DesignSystem() {
  return (
    <div className="p-6 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-foreground mb-2">SIMI Design System</h1>
        <p className="text-muted-foreground">Complete component library and design guidelines</p>
      </div>

      {/* Color Palette */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Color Palette</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Primary Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-primary" />
                <div>
                  <div className="font-semibold">Primary</div>
                  <div className="text-sm text-muted-foreground">#1E88E5</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-secondary" />
                <div>
                  <div className="font-semibold">Secondary</div>
                  <div className="text-sm text-muted-foreground">#26A69A</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Status Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-success" />
                <div>
                  <div className="font-semibold">Success</div>
                  <div className="text-sm text-muted-foreground">#43A047</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-warning" />
                <div>
                  <div className="font-semibold">Warning</div>
                  <div className="text-sm text-muted-foreground">#FB8C00</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-destructive" />
                <div>
                  <div className="font-semibold">Error</div>
                  <div className="text-sm text-muted-foreground">#E53935</div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Neutral Colors</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-background border" />
                <div>
                  <div className="font-semibold">Background</div>
                  <div className="text-sm text-muted-foreground">#F5F7FA</div>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 h-16 rounded-lg bg-foreground" />
                <div>
                  <div className="font-semibold">Foreground</div>
                  <div className="text-sm text-muted-foreground">#263238</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Typography */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Typography</h2>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div>
              <h1 className="mb-2">Heading 1 - Inter Bold</h1>
              <p className="text-sm text-muted-foreground">Used for page titles</p>
            </div>
            <div>
              <h2 className="mb-2">Heading 2 - Inter Bold</h2>
              <p className="text-sm text-muted-foreground">Used for section titles</p>
            </div>
            <div>
              <h3 className="mb-2">Heading 3 - Inter Bold</h3>
              <p className="text-sm text-muted-foreground">Used for card titles</p>
            </div>
            <div>
              <p className="mb-2">Body Text - Inter Regular</p>
              <p className="text-sm text-muted-foreground">Used for general content</p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Buttons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Buttons</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-4">
              <Button>Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="outline">Outline Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button variant="destructive">Destructive Button</Button>
              <Button size="sm">Small Button</Button>
              <Button size="lg">Large Button</Button>
              <Button disabled>Disabled Button</Button>
              <Button>
                <Heart className="w-4 h-4 mr-2" />
                With Icon
              </Button>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Form Elements */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Form Elements</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Inputs</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="text">Text Input</Label>
                <Input id="text" placeholder="Enter text..." />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Input</Label>
                <Input id="email" type="email" placeholder="email@example.com" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="disabled">Disabled Input</Label>
                <Input id="disabled" disabled placeholder="Disabled..." />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Selects & Switches</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Select Dropdown</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select an option" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="option1">Option 1</SelectItem>
                    <SelectItem value="option2">Option 2</SelectItem>
                    <SelectItem value="option3">Option 3</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex items-center justify-between">
                <Label>Switch Component</Label>
                <Switch />
              </div>
              <div className="space-y-2">
                <Label>Slider Component</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Badges & Avatars */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Badges & Avatars</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-base">Badges</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex flex-wrap gap-2">
                <Badge>Default</Badge>
                <Badge variant="secondary">Secondary</Badge>
                <Badge variant="outline">Outline</Badge>
                <Badge variant="destructive">Destructive</Badge>
                <Badge className="bg-success">Success</Badge>
                <Badge className="bg-warning">Warning</Badge>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-base">Avatars</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-4">
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-primary text-white">JD</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-secondary text-white">SM</AvatarFallback>
                </Avatar>
                <Avatar className="h-12 w-12">
                  <AvatarFallback className="bg-success text-white">AB</AvatarFallback>
                </Avatar>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Cards */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Cards</h2>
        <div className="grid md:grid-cols-3 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Basic Card</CardTitle>
              <CardDescription>Card with title and description</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This is a basic card component with rounded corners and soft shadows.
              </p>
            </CardContent>
          </Card>

          <Card className="border-2 border-primary">
            <CardHeader>
              <CardTitle>Highlighted Card</CardTitle>
              <CardDescription>Card with primary border</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                This card has a highlighted border for emphasis.
              </p>
            </CardContent>
          </Card>

          <Card className="bg-primary text-primary-foreground">
            <CardHeader>
              <CardTitle>Filled Card</CardTitle>
              <CardDescription className="text-primary-foreground/80">
                Card with background color
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-primary-foreground/90">
                This card has a filled background.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Tabs */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Tabs</h2>
        <Card>
          <CardContent className="p-6">
            <Tabs defaultValue="tab1" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="tab1">Tab 1</TabsTrigger>
                <TabsTrigger value="tab2">Tab 2</TabsTrigger>
                <TabsTrigger value="tab3">Tab 3</TabsTrigger>
              </TabsList>
              <TabsContent value="tab1" className="mt-4">
                <p className="text-sm text-muted-foreground">Content for Tab 1</p>
              </TabsContent>
              <TabsContent value="tab2" className="mt-4">
                <p className="text-sm text-muted-foreground">Content for Tab 2</p>
              </TabsContent>
              <TabsContent value="tab3" className="mt-4">
                <p className="text-sm text-muted-foreground">Content for Tab 3</p>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </section>

      {/* Icons */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Icons (Lucide React)</h2>
        <Card>
          <CardContent className="p-6">
            <div className="flex flex-wrap gap-6">
              <div className="flex flex-col items-center gap-2">
                <User className="w-8 h-8 text-primary" />
                <span className="text-xs">User</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Heart className="w-8 h-8 text-destructive" />
                <span className="text-xs">Heart</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Mail className="w-8 h-8 text-secondary" />
                <span className="text-xs">Mail</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Bell className="w-8 h-8 text-warning" />
                <span className="text-xs">Bell</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Calendar className="w-8 h-8 text-success" />
                <span className="text-xs">Calendar</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <FileText className="w-8 h-8 text-primary" />
                <span className="text-xs">FileText</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Settings className="w-8 h-8 text-muted-foreground" />
                <span className="text-xs">Settings</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Progress */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Progress Indicators</h2>
        <Card>
          <CardContent className="p-6 space-y-4">
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>45%</span>
              </div>
              <Progress value={45} />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Completion</span>
                <span>75%</span>
              </div>
              <Progress value={75} />
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Spacing System */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Spacing System</h2>
        <Card>
          <CardContent className="p-6">
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground mb-2">8px Grid System</p>
                <div className="flex flex-wrap gap-2">
                  {[1, 2, 3, 4, 6, 8, 12, 16].map(size => (
                    <div key={size} className="text-center">
                      <div 
                        className="bg-primary rounded" 
                        style={{ width: `${size * 8}px`, height: '32px' }}
                      />
                      <span className="text-xs text-muted-foreground">{size * 8}px</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
