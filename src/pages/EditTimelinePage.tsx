import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Plus, Trash2, Save, Download, Upload, Star, StarOff, AlertTriangle, Calendar, Mail, MapPin, User, PoundSterling } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Switch } from '@/components/ui/switch';
import { defaultTimelineEvents, saveTimelineEvents, importTimelineEvents, categoryConfig, type TimelineEvent, type EventCategory } from '@/data/timeline';

const categoryIcons = {
  complaint: <AlertTriangle className="w-4 h-4" />,
  visit: <MapPin className="w-4 h-4" />,
  correspondence: <Mail className="w-4 h-4" />,
  milestone: <Calendar className="w-4 h-4" />,
  ceo: <User className="w-4 h-4" />,
  payment: <PoundSterling className="w-4 h-4" />,
};

export default function EditTimelinePage() {
  const [events, setEvents] = useState<TimelineEvent[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const [expandedEvent, setExpandedEvent] = useState<number | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const saved = localStorage.getItem('admiral-timeline');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setEvents(parsed);
        } else {
          setEvents(defaultTimelineEvents);
        }
      } catch {
        setEvents(defaultTimelineEvents);
      }
    } else {
      setEvents(defaultTimelineEvents);
    }
  }, []);

  const handleSave = () => {
    saveTimelineEvents(events);
    setHasChanges(false);
    alert('Timeline saved! Return to the main site to see your changes.');
  };

  const handleReset = () => {
    if (confirm('Reset to default timeline? This will overwrite all your changes.')) {
      setEvents(defaultTimelineEvents);
      saveTimelineEvents(defaultTimelineEvents);
      setHasChanges(false);
    }
  };

  const handleAddEvent = () => {
    const newEvent: TimelineEvent = {
      id: Date.now(),
      date: new Date().toLocaleDateString('en-GB'),
      title: 'New Event',
      description: 'Describe what happened...',
      category: 'milestone',
      isKey: false,
    };
    setEvents([...events, newEvent]);
    setHasChanges(true);
    setExpandedEvent(newEvent.id);
  };

  const handleDeleteEvent = (id: number) => {
    if (confirm('Delete this event?')) {
      setEvents(events.filter(e => e.id !== id));
      setHasChanges(true);
    }
  };

  const handleUpdateEvent = (id: number, field: keyof TimelineEvent, value: string | boolean) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, [field]: value } : e
    ));
    setHasChanges(true);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(events, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'admiral-timeline.json';
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
  };

  const handleImportClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileImport = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      const content = e.target?.result as string;
      const imported = importTimelineEvents(content);
      if (imported) {
        setEvents(imported);
        setHasChanges(true);
        setImportError(null);
        alert('Timeline imported successfully! Click Save to apply.');
      } else {
        setImportError('Failed to import. Please check the JSON format.');
      }
    };
    reader.readAsText(file);
    event.target.value = '';
  };

  const toggleKey = (id: number) => {
    setEvents(events.map(e => 
      e.id === id ? { ...e, isKey: !e.isKey } : e
    ));
    setHasChanges(true);
  };

  const keyEventsCount = events.filter(e => e.isKey).length;

  return (
    <div className="min-h-screen bg-admiral-light">
      {/* Header */}
      <header className="bg-white border-b border-admiral-light sticky top-0 z-50">
        <div className="section-container">
          <div className="section-inner flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <a
                href="#/"
                className="flex items-center gap-2 text-admiral-navy hover:text-admiral-magenta transition-colors"
              >
                <ArrowLeft className="w-5 h-5" />
                <span className="font-medium">Back to Site</span>
              </a>
            </div>
            <div className="hidden sm:flex items-center gap-4">
              <h1 className="text-lg font-bold text-admiral-navy">
                Edit Timeline
              </h1>
              <a
                href="#/edit"
                className="text-sm text-admiral-gray hover:text-admiral-magenta transition-colors"
              >
                Edit Lessons →
              </a>
            </div>
            <div className="flex items-center gap-2">
              {hasChanges && (
                <span className="text-sm text-admiral-magenta hidden sm:inline">
                  Unsaved changes
                </span>
              )}
              <Button
                onClick={handleSave}
                className="bg-admiral-navy hover:bg-admiral-navy/90 gap-2"
              >
                <Save className="w-4 h-4" />
                <span className="hidden sm:inline">Save</span>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="section-container">
          <div className="section-inner max-w-4xl">
            {/* Stats Bar */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-white rounded-xl p-4 text-center border border-admiral-light">
                <div className="text-2xl font-bold text-admiral-navy">{events.length}</div>
                <div className="text-xs text-admiral-gray">Total Events</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-admiral-light">
                <div className="text-2xl font-bold text-admiral-magenta">{keyEventsCount}</div>
                <div className="text-xs text-admiral-gray">Key Events</div>
              </div>
              <div className="bg-white rounded-xl p-4 text-center border border-admiral-light">
                <div className="text-2xl font-bold text-admiral-blue">
                  {events.filter(e => e.category === 'complaint').length}
                </div>
                <div className="text-xs text-admiral-gray">Complaints</div>
              </div>
            </div>

            {/* Instructions */}
            <div className="bg-admiral-blue/10 rounded-xl p-4 mb-6">
              <h2 className="font-semibold text-admiral-navy mb-2">
                How to Edit Timeline
              </h2>
              <ul className="text-sm text-admiral-gray space-y-1 list-disc list-inside">
                <li>Click the <Star className="w-3 h-3 inline" /> star to mark an event as "Key" (appears in sidebar)</li>
                <li>Key events are displayed by default on the timeline page</li>
                <li>Expand events to edit full details</li>
                <li>Use categories to organize: Complaint, Milestone, CEO Escalation, etc.</li>
                <li>Click "Save" to update the site</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                onClick={handleAddEvent}
                variant="outline"
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Event
              </Button>
              <Button
                onClick={handleReset}
                variant="outline"
                className="gap-2 text-admiral-gray"
              >
                Reset to Default
              </Button>
              <Button
                onClick={handleExport}
                variant="outline"
                className="gap-2"
              >
                <Download className="w-4 h-4" />
                Export JSON
              </Button>
              <Button
                onClick={handleImportClick}
                variant="outline"
                className="gap-2"
              >
                <Upload className="w-4 h-4" />
                Import JSON
              </Button>
              <input
                ref={fileInputRef}
                type="file"
                accept=".json"
                onChange={handleFileImport}
                className="hidden"
              />
            </div>

            {/* Import Error */}
            {importError && (
              <div className="bg-warning/10 border border-warning/30 rounded-xl p-3 mb-6 text-sm text-warning">
                {importError}
              </div>
            )}

            {/* Events List */}
            <div className="space-y-3">
              {events.map((event, index) => {
                const isExpanded = expandedEvent === event.id;
                const config = categoryConfig[event.category];
                const Icon = categoryIcons[event.category];
                
                return (
                  <div
                    key={event.id}
                    className={`bg-white rounded-xl border transition-all ${
                      event.isKey ? 'border-admiral-magenta/50 shadow-sm' : 'border-admiral-light'
                    }`}
                  >
                    {/* Header - Always visible */}
                    <div 
                      className="flex items-center gap-3 p-4 cursor-pointer hover:bg-admiral-light/30"
                      onClick={() => setExpandedEvent(isExpanded ? null : event.id)}
                    >
                      {/* Star Toggle */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleKey(event.id);
                        }}
                        className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                          event.isKey 
                            ? 'bg-admiral-magenta text-white' 
                            : 'bg-admiral-light text-admiral-gray hover:bg-admiral-magenta/20'
                        }`}
                        title={event.isKey ? 'Remove from Key Events' : 'Add to Key Events'}
                      >
                        {event.isKey ? <Star className="w-4 h-4" /> : <StarOff className="w-4 h-4" />}
                      </button>

                      {/* Event Number */}
                      <span className="text-sm font-medium text-admiral-gray w-12">
                        #{index + 1}
                      </span>

                      {/* Date */}
                      <div className="flex-shrink-0 w-24">
                        <Input
                          value={event.date}
                          onChange={(e) => handleUpdateEvent(event.id, 'date', e.target.value)}
                          className="h-8 text-sm"
                          placeholder="DD/MM/YYYY"
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      {/* Category Badge */}
                      <Badge className={`${config.color} text-white border-0 flex-shrink-0`}>
                        <span className="flex items-center gap-1">
                          {Icon}
                          {config.label}
                        </span>
                      </Badge>

                      {/* Title */}
                      <div className="flex-1 min-w-0">
                        <Input
                          value={event.title}
                          onChange={(e) => handleUpdateEvent(event.id, 'title', e.target.value)}
                          className="h-8 font-medium"
                          placeholder="Event title..."
                          onClick={(e) => e.stopPropagation()}
                        />
                      </div>

                      {/* Delete */}
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDeleteEvent(event.id);
                        }}
                        className="text-admiral-gray hover:text-admiral-magenta transition-colors flex-shrink-0"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Expanded Content */}
                    {isExpanded && (
                      <div className="px-4 pb-4 pt-2 border-t border-admiral-light">
                        <div className="space-y-3">
                          <div>
                            <Label className="text-xs text-admiral-gray mb-1 block">
                              Description (shown in timeline)
                            </Label>
                            <Textarea
                              value={event.description}
                              onChange={(e) => handleUpdateEvent(event.id, 'description', e.target.value)}
                              placeholder="Short description..."
                              rows={2}
                            />
                          </div>

                          <div>
                            <Label className="text-xs text-admiral-gray mb-1 block">
                              Full Details (shown when clicked)
                            </Label>
                            <Textarea
                              value={event.fullDetails || ''}
                              onChange={(e) => handleUpdateEvent(event.id, 'fullDetails', e.target.value)}
                              placeholder="Detailed description (optional)..."
                              rows={4}
                            />
                          </div>

                          <div>
                            <Label className="text-xs text-admiral-gray mb-1 block">
                              Category
                            </Label>
                            <Select
                              value={event.category}
                              onValueChange={(value) => handleUpdateEvent(event.id, 'category', value as EventCategory)}
                            >
                              <SelectTrigger className="w-48">
                                <SelectValue />
                              </SelectTrigger>
                              <SelectContent>
                                {Object.entries(categoryConfig).map(([key, conf]) => (
                                  <SelectItem key={key} value={key}>
                                    <span className="flex items-center gap-2">
                                      {categoryIcons[key as EventCategory]}
                                      {conf.label}
                                    </span>
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          </div>

                          <div className="flex items-center gap-3 pt-2">
                            <Switch
                              checked={event.isKey}
                              onCheckedChange={() => toggleKey(event.id)}
                            />
                            <Label className="text-sm cursor-pointer" onClick={() => toggleKey(event.id)}>
                              Mark as Key Event (appears in sidebar)
                            </Label>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {events.length === 0 && (
              <div className="text-center py-12 text-admiral-gray">
                <p>No events yet. Click "Add Event" to get started.</p>
              </div>
            )}

            {/* Bottom Actions */}
            <div className="flex justify-center gap-3 mt-8">
              <Button
                onClick={handleSave}
                className="bg-admiral-navy hover:bg-admiral-navy/90 gap-2"
              >
                <Save className="w-4 h-4" />
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
