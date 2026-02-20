import { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Plus, Trash2, Save, Download, Upload, AlertTriangle, Info, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { defaultLessons, saveLessons, importLessons, type Lesson } from '@/data/lessons';

export default function EditPage() {
  const [lessons, setLessons] = useState<Lesson[]>([]);
  const [hasChanges, setHasChanges] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load from localStorage or use defaults
    const saved = localStorage.getItem('admiral-lessons');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length > 0) {
          setLessons(parsed);
        } else {
          setLessons(defaultLessons);
        }
      } catch {
        setLessons(defaultLessons);
      }
    } else {
      setLessons(defaultLessons);
    }
  }, []);

  const handleSave = () => {
    saveLessons(lessons);
    setHasChanges(false);
    alert('Lessons saved! Return to the main site to see your changes.');
  };

  const handleReset = () => {
    if (confirm('Reset to default lessons? This will overwrite your changes.')) {
      setLessons(defaultLessons);
      saveLessons(defaultLessons);
      setHasChanges(false);
    }
  };

  const handleAddLesson = () => {
    const newLesson: Lesson = {
      id: Date.now(),
      title: 'New Lesson',
      description: 'Describe what you learned...',
      priority: 'medium',
    };
    setLessons([...lessons, newLesson]);
    setHasChanges(true);
  };

  const handleDeleteLesson = (id: number) => {
    if (confirm('Delete this lesson?')) {
      setLessons(lessons.filter(l => l.id !== id));
      setHasChanges(true);
    }
  };

  const handleUpdateLesson = (id: number, field: keyof Lesson, value: string) => {
    setLessons(lessons.map(l => 
      l.id === id ? { ...l, [field]: value } : l
    ));
    setHasChanges(true);
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(lessons, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    const exportFileDefaultName = 'admiral-lessons.json';
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
      const imported = importLessons(content);
      if (imported) {
        setLessons(imported);
        setHasChanges(true);
        setImportError(null);
        alert('Lessons imported successfully! Click Save to apply.');
      } else {
        setImportError('Failed to import. Please check the JSON format.');
      }
    };
    reader.readAsText(file);
    // Reset file input
    event.target.value = '';
  };

  const priorityIcons = {
    high: <AlertTriangle className="w-4 h-4 text-admiral-magenta" />,
    medium: <Info className="w-4 h-4 text-admiral-blue" />,
    low: <CheckCircle className="w-4 h-4 text-admiral-navy" />,
  };

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
                Edit Lessons
              </h1>
              <a
                href="#/edit-timeline"
                className="text-sm text-admiral-gray hover:text-admiral-magenta transition-colors"
              >
                Edit Timeline →
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
          <div className="section-inner max-w-3xl">
            {/* Instructions */}
            <div className="bg-admiral-blue/10 rounded-xl p-4 mb-6">
              <h2 className="font-semibold text-admiral-navy mb-2">
                How to Edit
              </h2>
              <ul className="text-sm text-admiral-gray space-y-1 list-disc list-inside">
                <li>Edit lesson titles and descriptions below</li>
                <li>Set priority: High (red), Medium (blue), or Low (navy)</li>
                <li>Top 3 high-priority lessons appear on the hero section</li>
                <li>Click "Save" to update the site</li>
                <li>Use "Export JSON" to backup your changes</li>
                <li>Use "Import JSON" to restore from a backup</li>
              </ul>
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-3 mb-6">
              <Button
                onClick={handleAddLesson}
                variant="outline"
                className="gap-2"
              >
                <Plus className="w-4 h-4" />
                Add Lesson
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

            {/* Lessons List */}
            <div className="space-y-4">
              {lessons.map((lesson, index) => (
                <div
                  key={lesson.id}
                  className="bg-white rounded-xl p-4 border border-admiral-light"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-sm font-medium text-admiral-gray">
                      Lesson #{index + 1}
                    </span>
                    <button
                      onClick={() => handleDeleteLesson(lesson.id)}
                      className="text-admiral-gray hover:text-admiral-magenta transition-colors"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <Label className="text-xs text-admiral-gray mb-1 block">
                        Title
                      </Label>
                      <Input
                        value={lesson.title}
                        onChange={(e) => handleUpdateLesson(lesson.id, 'title', e.target.value)}
                        placeholder="Lesson title..."
                        className="font-medium"
                      />
                    </div>

                    <div>
                      <Label className="text-xs text-admiral-gray mb-1 block">
                        Description
                      </Label>
                      <Textarea
                        value={lesson.description}
                        onChange={(e) => handleUpdateLesson(lesson.id, 'description', e.target.value)}
                        placeholder="Describe what you learned..."
                        rows={3}
                      />
                    </div>

                    <div>
                      <Label className="text-xs text-admiral-gray mb-1 block">
                        Priority
                      </Label>
                      <Select
                        value={lesson.priority}
                        onValueChange={(value) => handleUpdateLesson(lesson.id, 'priority', value)}
                      >
                        <SelectTrigger className="w-40">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="high" className="flex items-center gap-2">
                            <span className="flex items-center gap-2">
                              {priorityIcons.high}
                              High
                            </span>
                          </SelectItem>
                          <SelectItem value="medium">
                            <span className="flex items-center gap-2">
                              {priorityIcons.medium}
                              Medium
                            </span>
                          </SelectItem>
                          <SelectItem value="low">
                            <span className="flex items-center gap-2">
                              {priorityIcons.low}
                              Low
                            </span>
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {lessons.length === 0 && (
              <div className="text-center py-12 text-admiral-gray">
                <p>No lessons yet. Click "Add Lesson" to get started.</p>
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
